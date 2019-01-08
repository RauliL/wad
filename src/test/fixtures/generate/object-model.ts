import { readFileSync, writeFileSync } from 'fs'
import { readWad, createObjectModel } from '../../..'
import { compress, findLump } from '../utils'
import { Lump, Wad } from '../../../wad/types'
import { writeWad } from '../../../wad/write/write-wad';

export const generateObjectModels = () => {
  const testWadData = readFileSync( './src/test/fixtures/doom1.wad' )
  const testWadView = new DataView( testWadData.buffer )
  const testWad = readWad( testWadView )

  const testPwadData = readFileSync( './src/test/fixtures/doomba.wad' )
  const testPwadView = new DataView( testPwadData.buffer )
  const testPwad = readWad( testPwadView )

  // not present in test data
  const exclude = [ 'type', 'dmxgusc' ]

  const data = createObjectModel( testWad )

  Object.keys( data ).forEach( name => {
    if ( exclude.includes( name ) ) return

    writeFileSync(
      `./src/test/fixtures/expect/object-model/${ name }.json.gz`,
      compress( data[ name ] )
    )
  } )

  const pwadData = createObjectModel( testPwad )

  writeFileSync(
    `./src/test/fixtures/expect/object-model/pwad.json.gz`,
    compress( pwadData )
  )
}