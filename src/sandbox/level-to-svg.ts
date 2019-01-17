import { Level } from '../object-model/types'
import { LevelViewSettings, Line } from './types'
import { Vertex, Linedef, Thing, Sidedef } from '../lumps/types'
import { midPoint, rads, lineEnd } from './util';

export const levelToSvg = ( level: Level, settings: LevelViewSettings ) => {
  let minX = Number.MAX_SAFE_INTEGER
  let minY = Number.MAX_SAFE_INTEGER
  let maxX = Number.MIN_SAFE_INTEGER
  let maxY = Number.MIN_SAFE_INTEGER

  level.vertexes.forEach( ({ x, y }) => {
    if( x < minX ) minX = x
    if( x > maxX ) maxX = x
    if( y < minY ) minY = y
    if( y > maxY ) maxY = y
  })

  const width = maxX - minX
  const height = maxY - minY

  const div = document.createElement( 'div' )

  const svgText = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${ minX - 8 } ${ minY - 8 } ${ width + 16 } ${ height + 16 }">
      ${ settings.grid ? grid : '' }
      ${ settings.vertexes ? vertexesToSvg( level.vertexes ) : '' }
      ${ settings.linedefs ? linedefsToSvg( level.linedefs, level.vertexes ) : '' }
      ${ settings.sidedefs ? sidedefsToSvg( level.linedefs, level.sidedefs, level.vertexes ) : '' }
      ${ settings.things ? thingsToSvg( level.things ) : '' }
      ${ settings.sectors ? sectorsToSvg( level ) : '' }
    </svg>
  `

  div.innerHTML = svgText

  return <SVGSVGElement>div.firstElementChild
}

const grid = `
  <defs>
    <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
      <path d="M 8 0 L 0 0 0 8" fill="none" stroke="gray" stroke-width="0.5"/>
    </pattern>
    <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
      <rect width="64" height="64" fill="url(#smallGrid)"/>
      <path d="M 64 0 L 0 0 0 64" fill="none" stroke="gray" stroke-width="1"/>
    </pattern>
  </defs>

  <rect x="-32768" y ="-32768" width="65535" height="65535" fill="url(#grid)" />
`

const vertexesToSvg = ( vertexes: Vertex[] ) =>
  vertexes.map( ({ x, y }) =>
    `<circle class="vertex" cx="${ x }" cy="${ y }" r="${ 2 }"></circle>`
  ).join( '' )

const linedefsToSvg = ( linedefs: Linedef[], vertexes: Vertex[] ) =>
  linedefs.map( linedef => {
    const { startVertex, endVertex } = linedef
    const start = vertexes[ startVertex ]
    const end = vertexes[ endVertex ]

    return `<line class="linedef" x1="${ start.x }" y1="${ start.y }" x2="${ end.x }" y2="${ end.y }" stroke="black"></line>`
  } ).join( '' )

const thingsToSvg = ( things: Thing[] ) =>
  things.map( ( { x, y } ) => `<circle class="thing" cx="${ x }" cy="${ y }" r="${ 32 }" fill="rgba( 127, 127, 127, 0.5 )"></circle>` ).join( '' )

const sidedefsToSvg = ( linedefs: Linedef[], sidedefs: Sidedef[], vertexes: Vertex[] ) => {
  const length = 8
  let svg = ''

  linedefs.forEach( linedef => {
    const start = vertexes[ linedef.startVertex ]
    const end = vertexes[ linedef.endVertex ]
    const left = sidedefs[ linedef.leftSidedef ]
    const right = sidedefs[ linedef.rightSidedef ]
    const mid = midPoint( start, end )

    const r = rads( start, end )

    if( left ){
      const newR = r + Math.PI / 2
      const newEnd = lineEnd( mid, newR, length )
      svg += `<line class="sidedef left" x1="${ mid.x }" y1="${ mid.y }" x2="${ newEnd.x }" y2="${ newEnd.y }" stroke="red"></line>`
    }

    if( right ){
      const newR = r - Math.PI / 2
      const newEnd = lineEnd( mid, newR, length )
      svg += `<line class="sidedef right" x1="${ mid.x }" y1="${ mid.y }" x2="${ newEnd.x }" y2="${ newEnd.y }" stroke="blue"></line>`
    }
  })

  return svg
}

const sectorsToSvg = ( level: Level ) => {
  const { vertexes, linedefs, sidedefs, sectors } = level

  const hueStep = 360 / ( sectors.length + 1 )

  let svg = ''

  sectors.forEach( ( _sector, s ) => {
    const hue = s * hueStep

    linedefs.forEach( linedef => {
      const left = sidedefs[ linedef.leftSidedef ]
      const right = sidedefs[ linedef.rightSidedef ]

      if ( ( left && left.sector === s ) || ( right && right.sector === s ) ){
        const { startVertex, endVertex } = linedef
        const start = vertexes[ startVertex ]
        const end = vertexes[ endVertex ]
        svg += `<line class="sector" x1="${ start.x }" y1="${ start.y }" x2="${ end.x }" y2="${ end.y }" stroke="hsla(${ hue },100%,50%,0.5)"></line>`
      }
    })
  })

  return svg
}