import { Vertex } from '../lumps/types'
import { Line } from './types'

export const vertexEquals = ( a: Vertex, b: Vertex ) =>
  a.x === b.x && a.y === b.y

export const midPoint = ( start: Vertex, end: Vertex ) => {
  const minX = Math.min( start.x, end.x )
  const maxX = Math.max( start.x, end.x )
  const minY = Math.min( start.y, end.y )
  const maxY = Math.max( start.y, end.y )

  const x = ( maxX - minX ) / 2 + minX
  const y = ( maxY - minY ) / 2 + minY

  return <Vertex>{ x, y }
}

export const rads = ( start: Vertex, end: Vertex ) =>
  Math.atan2( end.y - start.y, end.x - start.x )

export const lineEnd = ( start: Vertex, rads: number, length: number ) => {
  const { x: sx, y: sy } = start
  const x = sx + Math.cos( rads ) * length
  const y = sy + Math.sin( rads ) * length

  return <Vertex>{ x, y }
}
