import { readWadHeader } from './read-wad-header'
import { readLumpInfoTable } from './read-lump-info'
import { readLump } from './read-lump'
import { Wad } from '../types'

export const readWad = ( data: Uint8Array ) => {
  const header = readWadHeader( data )
  const infoTable = readLumpInfoTable( data, header )
  const lumps = infoTable.map( lumpInfo => readLump( data, lumpInfo ) )
  const { type } = header

  return <Wad>{ type, lumps }
}
