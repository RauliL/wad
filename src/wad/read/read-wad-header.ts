import { readAscii, readInt32 } from '../../utils'
import { WadHeader } from '../types'

export const readWadHeader = ( data: Uint8Array ) => {
  const wadView = new DataView( data.buffer )
  const type = readAscii( wadView, 0, 4 )
  const numberOfLumps = readInt32( wadView, 4 )
  const infoTableOffset = readInt32( wadView, 8 )

  return <WadHeader>{
    type,
    numberOfLumps,
    infoTableOffset
  }
}
