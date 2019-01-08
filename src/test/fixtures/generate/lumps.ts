import { readFileSync, writeFileSync } from 'fs'
import { readWad, readLumpData } from '../../..'
import { findLump, testLumps, compress } from '../utils'

export const generateLumps = () => {
  const testWadData = readFileSync( './src/test/fixtures/doom1.wad' )
  const testWadView = new DataView( testWadData.buffer )
  const testWad = readWad( testWadView )
  const { lumps } = testWad

  const lumpTypes = Object.keys( testLumps )

  const generateLump = ( lumpType: string ) => {
    const lumpName: string = (
      testLumps[ lumpType ] === true ?
        lumpType :
        testLumps[ lumpType ]
    )

    const lump = findLump( lumps, lumpName.toUpperCase() )

    writeFileSync(
      `./src/test/fixtures/expect/lumps/${ lumpType }.json.gz`,
      compress( readLumpData( lump.data, lumpType ) )
    )
  }

  lumpTypes.forEach( generateLump )
}
