import { Rgb } from '../types'
import { readUint8 } from '../../utils'

const paletteCount = 14

export const playpal = ( view: DataView ) => {
  const palettes = Array<Uint8Array>( paletteCount )

  let offset = 0

  for ( var i = 0; i < paletteCount; i++ ) {
    const palette = new Uint8Array( 768 )

    for ( let j = 0; j < 256; j++ ) {
      let r = readUint8( view, offset )
      offset++
      let g = readUint8( view, offset )
      offset++
      let b = readUint8( view, offset )
      offset++

      const p = j * 3

      palette[ p ] = r
      palette[ p + 1 ] = g
      palette[ p + 2 ] = b
    }

    palettes[ i ] = palette
  }

  return palettes
}
