import * as assert from 'assert'
import { readFileSync } from 'fs'
import { readWad } from '../wad/read/read-wad'
import { readLumpData } from '../lumps/read-lump-data'
import { stringify, testLumps, findLump, decompress } from './fixtures/utils'

const testWadData = readFileSync( './src/test/fixtures/doom1.wad' )
const testWadView = new DataView( testWadData.buffer )
const testWad = readWad( testWadView )
const { lumps } = testWad

const lumpTypes = Object.keys( testLumps )

const testLump = ( lumpType: string ) => {
  const lumpName: string = (
    testLumps[ lumpType ] === true ?
      lumpType :
      testLumps[ lumpType ]
  )

  it( lumpType, () => {
    const expect = decompress(
      readFileSync(
      `./src/test/fixtures/expect/lumps/${ lumpType }.json.gz`
      )
    )
    const lump = findLump( lumps, lumpName.toUpperCase() )
    const result = JSON.parse(
      stringify( readLumpData( lump.data, lumpType ) )
    )

    assert.deepEqual( result, expect )
  } )
}

describe( 'lumps', () => {
  lumpTypes.forEach( testLump )

  it( 'fails on bad lump name', () => {
    assert.throws( () => readLumpData( lumps[ 0 ].data, 'bad lump name' ) )
  })

  it( 'no lumpname means raw', () => {
    const expect = decompress(
      readFileSync(
        `./src/test/fixtures/expect/lumps/raw.json.gz`
      )
    )
    const lump = findLump( lumps, 'DEMO1' )
    const result = JSON.parse(
      stringify( readLumpData( lump.data ) )
    )

    assert.deepEqual( result, expect )
  })
} )
