export const readUint8 = ( view: DataView, offset: number ) =>
  view.getUint8( offset )

export const readInt16 = ( view: DataView, offset: number ) =>
  view.getInt16( offset, true )

export const readInt32 = ( view: DataView, offset: number ) =>
  view.getInt32( offset, true )

export const writeInt32 = ( view: DataView, offset: number, value: number ) =>
  view.setInt32( offset, value, true )

export const readAscii = ( view: DataView, offset: number, length: number ) => {
  let result = ''

  for ( let i = offset; i < length; i++ ) {
    result += String.fromCharCode( view.getUint8( i ) )
  }

  return result.replace( /\0/g, '' )
}

export const writeAscii = ( view: DataView, offset: number, value: string ) => {
  for ( let i = 0; i < value.length; i++ ) {
    view.setUint8( offset + i, value.charCodeAt( i ) )
  }
}

export const ensureStringLength = ( str: string, len: number ) => {
  if ( str.length > len ) {
    str = str.substr( 0, len )
  }

  while ( str.length < len ) {
    str += '\0'
  }

  return str
}

export const lumpNameRegex = /[0-9A-Z\[\]_\-\\]+/
