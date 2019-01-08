import { Wad } from '../types'
import {
  writeAscii, ensureStringLength, writeInt32, lumpNameRegex
} from '../../utils'

const headerSize = 12

export const writeWad = ( wad: Wad ) => {
  const infoSize = wad.lumps.length * 16
  const lumpSize = wad.lumps.reduce(
    ( sum, lump ) =>
      sum + lump.data.byteLength,
    0
  )
  const wadSize = headerSize + lumpSize + infoSize
  const lumpsOffset = headerSize
  const infoTableOffset = lumpsOffset + lumpSize
  const data = new Uint8Array( wadSize )
  const view = new DataView( data.buffer )

  //header
  writeAscii( view, 0, ensureStringLength( wad.type, 4 ) )
  writeInt32( view, 4, wad.lumps.length )
  writeInt32( view, 8, infoTableOffset )

  let filePosition = headerSize

  wad.lumps.forEach( ( lump, i ) => {
    if ( !lumpNameRegex.test( lump.name ) )
      throw Error( `Bad lump name: ${ lump.name }` )

    const infoOffset = 16 * i + infoTableOffset
    const { buffer, byteOffset, byteLength } = lump.data
    const lumpBytes = new Uint8Array( buffer.slice( byteOffset, byteLength ) )

    // lump info table entry
    writeInt32( view, infoOffset, filePosition )
    writeInt32( view, infoOffset + 4, lump.data.byteLength )
    writeAscii( view, infoOffset + 8, ensureStringLength( lump.name, 8 ) )

    // lump
    data.set( lumpBytes, filePosition )

    filePosition += lump.data.byteLength
  } )

  return view
}
