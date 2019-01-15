import { readInt16, readInt32, readUint8 } from '../../utils'
import { Picture } from '../types'

export const picture = ( view: DataView ) => {
  const width = readInt16( view, 0 )
  const height = readInt16( view, 2 )
  const left = readInt16( view, 4 )
  const top = readInt16( view, 6 )

  const columnOffsets: number[] = []
  const data = new Uint8Array( width * height )

  let offset = 8

  for ( let i = 0; i < width; i++ ) {
    columnOffsets.push( readInt32( view, offset ) )
    offset += 4
  }

  for ( let x = 0; x < width; x++ ) {
    offset = columnOffsets[ x ]

    let rowStart = 0

    while ( rowStart !== 255 ) {
      rowStart = readUint8( view, offset )
      offset++

      if ( rowStart === 255 ) break;

      let pixelCount = readUint8( view, offset )
      offset++

      //skip dummy byte
      offset++

      for ( let j = 0; j < pixelCount; j++ ) {
        const y = j + rowStart
        const i = y * width + x

        data[ i ] = readUint8( view, offset )
        offset++
      }

      //skip dummy byte
      offset++
    }
  }

  return <Picture>{
    width, height, left, top, data
  }
}
