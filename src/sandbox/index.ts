import { readWad } from '../wad/read/read-wad'
import { readLumpData } from '../lumps/read-lump-data'
import { findLump } from '../test/fixtures/utils'
import { Lump } from '../wad/types'
import { paletteToCanvas } from './palette-to-canvas'
import { colormapToCanvas } from './colormap-to-canvas'
import { createObjectModel } from '../object-model'
import { imageToCanvas } from './image-to-canvas';
import { DoomObjectModel } from '../object-model/types';
import { textureToCanvas } from './texture-to-canvas';

const exclude = [
  'type', 'demos', 'dmxgus', 'dmxgusc', 'endoom', 'genmidi', 'music', 'sounds'
]

document.addEventListener( 'DOMContentLoaded', async () => {
  const filePicker = <HTMLInputElement>document.querySelector( 'input[type="file"]' )
  const lumpsEl = <HTMLDivElement>document.querySelector( '.lumps' )
  const lumps2El = <HTMLDivElement>document.querySelector( '.lumps2' )
  const previewEl = <HTMLDivElement>document.querySelector( '.preview' )
  const reader = new FileReader()

  filePicker.addEventListener( 'change', e => {
    lumpsEl.innerHTML = ''
    lumps2El.innerHTML = ''
    previewEl.innerHTML = ''

    const [ file ] = e.target![ 'files' ]

    reader.onload = e => {
      const buffer: ArrayBuffer = e.target![ 'result' ]
      const wad = readWad( new Uint8Array( buffer ) )
      const om = createObjectModel( wad )

      console.log( om )

      const names = Object.keys( om ).filter(
        n => !exclude.includes( n )
      ).filter(
        n => om[ n ]
      )

      names.forEach( name => {
        const chooseLumpEl = document.createElement( 'div' )
        chooseLumpEl.classList.add( 'lump' )
        chooseLumpEl.innerText = name

        lumpsEl.appendChild( chooseLumpEl )

        chooseLumpEl.addEventListener( 'click', () => {
          const lumpEls = document.querySelectorAll( '.lump' )

          lumpEls.forEach( el => el.classList.remove( 'selected' ) )
          chooseLumpEl.classList.add( 'selected' )

          previewEl.innerHTML = ''
          lumps2El.innerHTML = ''

          if( name === 'playpal' && om.playpal ){
            showPlayPal( om.playpal )
            return
          }

          if ( name === 'colormap' && om.colormap && om.colormap.length && om.playpal ){
            showColorMap( om.colormap, om.playpal[ 0 ] )
            return
          }

          if( name === 'flats' && om.flats ){
            showImageBrowser( <DoomObjectModel>om, 'flats' )

            return
          }

          if ( name === 'patches' && om.patches ){
            showImageBrowser( <DoomObjectModel>om, 'patches' )

            return
          }

          if ( name === 'sprites' && om.sprites ) {
            showImageBrowser( <DoomObjectModel>om, 'sprites' )

            return
          }

          if ( name === 'ui' && om.ui ) {
            showImageBrowser( <DoomObjectModel>om, 'ui' )

            return
          }

          if( name === 'textures' && om.textures ){
            showTextureBrowser( <DoomObjectModel>om )

            return
          }
        })
      })
    }

    reader.readAsArrayBuffer( file )
  })

  const showPlayPal = ( palettes: Uint8Array[] ) => {
    palettes.forEach( palette => {
      const canvas = paletteToCanvas( palette )

      previewEl.appendChild( canvas )
    })
  }

  const showColorMap = ( colormap: Uint8Array[], palette: Uint8Array ) => {
    const canvas = colormapToCanvas( colormap, palette )

    canvas.classList.add( 'fit' )

    previewEl.appendChild( canvas )
  }

  const showImageBrowser = ( om: DoomObjectModel, key: string ) => {
    const names = Object.keys( om[ key ] )

    names.forEach( n => {
      const el = document.createElement( 'div' )
      el.classList.add( 'lump2' )
      el.innerText = n

      lumps2El.append( el )

      el.addEventListener( 'click', () => {
        previewEl.innerHTML = ''

        const image = om[ key ][ n ]

        if ( image ) {
          const canvas = imageToCanvas( image, om.playpal![ 0 ] )

          previewEl.appendChild( canvas )
        } else {
          console.error( `${ n } not found!` )
        }
      } )
    } )
  }

  const showTextureBrowser = ( om: DoomObjectModel ) => {
    const patchList = Object.values( om.patches! )

    om.textures.forEach( texture => {
      const el = document.createElement( 'div' )
      el.classList.add( 'lump2' )
      el.innerText = texture.name

      lumps2El.append( el )

      el.addEventListener( 'click', () => {
        previewEl.innerHTML = ''

        const canvas = textureToCanvas( texture, patchList, om.playpal![ 0 ] )

        previewEl.appendChild( canvas )
      } )
    } )
  }
})