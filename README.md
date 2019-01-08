# wad

Work with the Doom WAD format

`npm install @nrkn/wad`

```javascript
const { readFileSync, writeFileSync } = require( 'fs' )
const {
  readWad, writeWad, readLumpData, createObjectModel
} = require( '@nrkn/wad' )

// read a wad
const data = readFileSync( 'example.wad' )
const view = new DataView( data.buffer )
const wad = readWad( view )

// write a wad
const newLump = {
  name: 'NEWLUMP',
  data: new DataView( new Uint8Array( [ 1, 2, 3 ] ).buffer )
}

wad.lumps.push( newLump )

writeFileSync( 'new.wad', writeWad( wad ).buffer )

// read lump data
const playpalLump = wad.lumps.find( lump => lump.name === 'PLAYPAL' )

const palettes = readLumpData( playpalLump, 'PLAYPAL' )

// create an object model
const doomObjectModel = createObjectModel( wad )

const { levels } = doomObjectModel

const e1m1 = levels.find( level => level.name === 'E1M1' )

e1m1.vertexes.forEach( v => console.log( v.x, v.y ) )

// etc.
```

## todo

- `writeLumpData`
- `objectModelToWad`
- maybe make all the public facing APIs use `ArrayBuffer` instead of `DataView`

## license

MIT License

Copyright (c) 2019 Nik Coughlin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.