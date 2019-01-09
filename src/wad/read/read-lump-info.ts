import { WadHeader, LumpInfo } from '../types'
import { readInt32, readAscii } from '../../utils'
import { readWadHeader } from './read-wad-header'

const readLumpInfo = ( wadView: DataView, lumpOffset: number, id: number ) => {
  const offset = readInt32( wadView, lumpOffset )
  const length = readInt32( wadView, lumpOffset + 4 )
  const name = readAscii( wadView, lumpOffset + 8, lumpOffset + 16 )

  return <LumpInfo>{
    id,
    name,
    offset,
    length
  }
}

export const readLumpInfoTable = ( data: Uint8Array, header?: WadHeader ) => {
  header = header || readWadHeader( data )

  const wadView = new DataView( data.buffer )
  const infoTable: LumpInfo[] = []

  for ( let i = 0; i < header.numberOfLumps; i++ ) {
    const offset = 16 * i + header.infoTableOffset
    infoTable.push( readLumpInfo( wadView, offset, i ) )
  }

  return infoTable
}
