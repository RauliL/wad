import { readWad } from '../wad/read/read-wad'
import { paletteToCanvas } from './palette-to-canvas'
import { colormapToCanvas } from './colormap-to-canvas'
import { createObjectModel } from '../object-model'
import { imageToCanvas } from './image-to-canvas'
import { DoomObjectModel } from '../object-model/types'
import { textureToCanvas } from './texture-to-canvas'
import { LevelViewSettings } from './types'
import { levelToSvg } from './level-to-svg'
import { zoomSvg, panSvg } from './svg-events'

const exclude = [
  'type', 'demos', 'dmxgus', 'dmxgusc', 'endoom', 'genmidi', 'music', 'sounds'
]

document.addEventListener( 'DOMContentLoaded', async () => {
  const filePicker = <HTMLInputElement>document.querySelector( 'input[type="file"]' )
  const browser1El = <HTMLDivElement>document.querySelector( '.browser-1' )
  const browser2El = <HTMLDivElement>document.querySelector( '.browser-2' )
  const browser3El = <HTMLDivElement>document.querySelector( '.browser-3' )
  const previewEl = <HTMLDivElement>document.querySelector( '.preview' )
  const reader = new FileReader()

  filePicker.addEventListener( 'change', e => {
    browser1El.innerHTML = ''
    browser2El.innerHTML = ''
    browser3El.innerHTML = ''
    previewEl.innerHTML = ''

    const [ file ] = e.target![ 'files' ]

    reader.onload = e => {
      const buffer: ArrayBuffer = e.target![ 'result' ]
      const wad = readWad( new Uint8Array( buffer ) )
      const om = createObjectModel( wad )

      const names = Object.keys( om ).filter(
        n => !exclude.includes( n )
      ).filter(
        n => om[ n ]
      )

      names.forEach( name => {
        const browserSelectEl = document.createElement( 'div' )
        browserSelectEl.classList.add( 'browser-select' )
        browserSelectEl.classList.add( 'browser-select-1' )
        browserSelectEl.innerText = name

        browser1El.appendChild( browserSelectEl )

        browserSelectEl.addEventListener( 'click', () => {
          const select1Els = document.querySelectorAll( '.browser-select-1' )

          select1Els.forEach( el => el.classList.remove( 'selected' ) )
          browserSelectEl.classList.add( 'selected' )

          previewEl.innerHTML = ''
          browser2El.innerHTML = ''
          browser3El.innerHTML = ''

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

          if( name === 'levels' && om.levels && om.levels.length ){
            showLevelBrowser( <DoomObjectModel>om )

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
      el.classList.add( 'browser-select' )
      el.classList.add( 'browser-select-2' )
      el.innerText = n

      browser2El.append( el )

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
      el.classList.add( 'browser-select' )
      el.classList.add( 'browser-select-2' )
      el.innerText = texture.name

      browser2El.append( el )

      el.addEventListener( 'click', () => {
        previewEl.innerHTML = ''

        const canvas = textureToCanvas( texture, patchList, om.playpal![ 0 ] )

        previewEl.appendChild( canvas )
      } )
    } )
  }

  const showLevelElement: LevelViewSettings = {
    grid: true,
    blockmap: false,
    linedefs: true,
    nodes: false,
    reject: false,
    sectors: true,
    segs: false,
    sidedefs: true,
    ssectors: false,
    things: true,
    vertexes: true
  }

  const showLevelBrowser = ( om: DoomObjectModel ) => {
    om.levels.forEach( level => {
      const el = document.createElement( 'div' )
      el.classList.add( 'browser-select' )
      el.classList.add( 'browser-select-2' )
      el.innerText = level.name

      browser2El.append( el )

      el.addEventListener( 'click', () => {
        const draw = () => {
          browser3El.innerHTML = ''
          previewEl.innerHTML = ''

          const svg = levelToSvg( om, level, showLevelElement )

          Object.keys( showLevelElement ).forEach( key => {
            const div = document.createElement( 'div' )
            const label = document.createElement( 'label' )
            const text = document.createTextNode( ` ${ key }` )
            const check = document.createElement( 'input' )
            check.type = 'checkbox'
            check.checked = showLevelElement[ key ]

            check.onchange = () => {
              const { x, y, width, height } = svg.viewBox.baseVal

              showLevelElement[ key ] = !showLevelElement[ key ]

              const newSvg = draw()

              Object.assign( newSvg.viewBox.baseVal, { x, y, width, height } )
            }

            label.appendChild( check )
            label.appendChild( text )

            div.appendChild( label )

            browser3El.appendChild( div )
          } )

          svg.classList.add( 'fit' )

          zoomSvg( svg )
          panSvg( svg )

          previewEl.appendChild( svg )

          const resetZoomButton = document.createElement( 'button' )
          resetZoomButton.type = 'button'
          resetZoomButton.appendChild( document.createTextNode( 'Reset Zoom' ) )
          resetZoomButton.onclick = e => {
            e.preventDefault()

            const x = parseFloat( svg.dataset.minX! ) - 8
            const y = parseFloat( svg.dataset.minY! ) - 8
            const width = parseFloat( svg.dataset.width! ) + 16
            const height = parseFloat( svg.dataset.height! ) + 16

            Object.assign( svg.viewBox.baseVal, { x, y, width, height } )
          }

          browser3El.appendChild( resetZoomButton )

          return svg
        }

        draw()
      } )
    })
  }
})
