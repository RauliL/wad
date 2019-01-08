import * as assert from 'assert'
import { readFileSync } from 'fs'
import { Lump, Wad } from '../wad/types'
import { readWad, writeWad } from '..';
import { readLumpInfoTable } from '../wad/read/read-lump-info'

const testWadData = readFileSync( './src/test/fixtures/doom1.wad' )
const testWadView = new DataView( testWadData.buffer )

describe( 'wad', () => {
  it( 'reads a WAD', () => {
    const wad = readWad( testWadView )

    assert.strictEqual( wad.type, 'IWAD' )
    assert.strictEqual( wad.lumps.length, 1264 )
  } )

  it( 'writes a WAD', () => {
    const expectData = readFileSync( './src/test/fixtures/doom1.wad' )
    const wad = readWad( testWadView )
    const wadView = writeWad( wad )

    assert.deepEqual( wadView.buffer, expectData.buffer )
  } )

  it( 'gets a lump info table', () => {
    const lumps = readLumpInfoTable( testWadView )

    assert.strictEqual( lumps.length, 1264 )
  })

  it( 'ensures string length for lump names', () => {
    const lumpData = new Uint8Array( [ 1, 2, 3 ] )

    const lump: Lump = {
      name: 'GOODLUMP1',
      data: new DataView( lumpData.buffer )
    }

    const expect: Lump = {
      name: 'GOODLUMP',
      data: new DataView( lumpData.buffer )
    }

    const wadView = writeWad( {
      type: 'PWAD',
      lumps: [ lump ]
    } )

    const wad = readWad( wadView )

    assert.deepEqual( wad.lumps[ 0 ], expect )
  } )

  it( 'enforces valid lump names', () => {
    const lumpData = new Uint8Array( [ 1, 2, 3 ] )

    const lump: Lump = {
      name: 'bad lump name',
      data: new DataView( lumpData.buffer )
    }

    const wad: Wad = {
      type: 'PWAD',
      lumps: [ lump ]
    }

    assert.throws( () => writeWad( wad ) )
  } )
})
