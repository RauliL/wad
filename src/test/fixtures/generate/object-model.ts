import { readFileSync, writeFileSync } from 'fs'
import { readWad, createObjectModel } from '../../..'
import { compress, findLump } from '../utils'

export const generateObjectModels = () => {
  const testWadData = readFileSync( './src/test/fixtures/doom1.wad' )
  const testWad = readWad( testWadData )

  const testPwadData = readFileSync( './src/test/fixtures/doomba.wad' )
  const testPwad = readWad( testPwadData )

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