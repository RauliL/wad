import { Texture, Picture } from '../lumps/types'
import { imageToCanvas } from './image-to-canvas'

export const textureToCanvas = ( texture: Texture, pictures: Picture[], palette: Uint8Array, block = 4 ) => {
  const { width, height, patches } = texture

  const canvas = document.createElement( 'canvas' )
  const cw = block * width
  const ch = block * height

  canvas.width = cw
  canvas.height = ch

  const context = canvas.getContext( '2d' )!

  patches.forEach( p => {
    const { patch, x, y } = p
    const picture = pictures[ patch ]

    const patchCanvas = imageToCanvas( picture, palette, block )

    context.drawImage( patchCanvas, x * block, y * block )
  })

  return canvas
}
