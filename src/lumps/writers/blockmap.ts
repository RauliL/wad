import { Blockmap } from '../types'
import { writeInt16, writeUint16 } from '../../utils'

const name = 'BLOCKMAP'
const headerSize = 8

export const writeBlockmap = ( blockmap: Blockmap ) => {
  const { x, y, columns, rows, blocks } = blockmap

  const offsetsSize = blocks.length * 2

  const blocksSize = blocks.reduce(
    ( sum, block ) => sum + block.length * 2 + 4,
    0
  )

  const size = headerSize + offsetsSize + blocksSize

  const data = new Uint8Array( size )
  const view = new DataView( data.buffer )

  // header
  writeInt16( view, 0, x )
  writeInt16( view, 2, y )
  writeInt16( view, 4, columns )
  writeInt16( view, 6, rows )

  let offset = headerSize + offsetsSize

  blocks.forEach( ( blocklist, i ) => {
    //offset
    const offsetOffset = headerSize + 2 * i
    writeUint16( view, offsetOffset, offset )

    //blocks
    writeInt16( view, offset, 0 )
    offset += 2

    blocklist.forEach( value => {
      writeInt16( view, offset, value )
      offset += 2
    })

    writeInt16( view, offset, -1 )
    offset += 2
  })

  return { name, data }
}