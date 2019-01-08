import { readWadHeader } from './read-wad-header'
import { readLumpInfoTable } from './read-lump-info'
import { readLump } from './read-lump'
import { Wad } from '../types'

export const readWad = ( wadView: DataView ) => {
  const header = readWadHeader( wadView )
  const infoTable = readLumpInfoTable( wadView, header )
  const lumps = infoTable.map( lumpInfo => readLump( wadView, lumpInfo ) )
  const { type } = header

  return <Wad>{ type, lumps }
}
