import { LumpInfo, Lump } from '../types'

export const readLump = ( wadView: DataView, info: LumpInfo ) => {
  const { name, offset, length } = info
  const data = new DataView( wadView.buffer, offset, length )

  return <Lump>{ name, data }
}
