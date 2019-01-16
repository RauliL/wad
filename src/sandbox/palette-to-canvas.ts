import { getColor } from './get-color'

export const paletteToCanvas = ( palette: Uint8Array, block = 16 ) => {
  const canvas = document.createElement( 'canvas' )
  const size = block * 16

  canvas.width = size
  canvas.height = size

  const context = canvas.getContext( '2d' )!

  for ( let y = 0; y < 16; y++ ) {
    for ( let x = 0; x < 16; x++ ) {
      const i = y * 16 + x
      const color = getColor( palette, i )

      context.fillStyle = color
      context.fillRect( x * block, y * block, block, block )
    }
  }

  return canvas
}
