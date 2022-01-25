# @rauli/wad

Work with the Doom WAD format.

Fork of [@nrkn/wad](https://www.npmjs.com/package/@nrkn/wad).

## Installation

```sh
$ npm install --save @rauli/wad
```

## Usage

```typescript
import { readFileSync, writeFileSync } from "fs";
import {
  readWad,
  writeWad,
  readLumpData,
  createObjectModel,
} from "@rauli/wad";

// read a wad
const wad = readWad(readFileSync("example.wad"));

// write a wad
const newLump = {
  name: "NEWLUMP",
  data: new Uint8Array([1, 2, 3]),
};

wad.lumps.push(newLump);

writeFileSync("new.wad", writeWad(wad));

// read lump data
const playpalLump = wad.lumps.find((lump) => lump.name === "PLAYPAL");

const palettes = readLumpData(playpalLump.data, "PLAYPAL");

// create an object model
const doomObjectModel = createObjectModel(wad);

const { levels } = doomObjectModel;

const e1m1 = levels.find((level) => level.name === "E1M1");

e1m1.vertexes.forEach((v) => console.log(v.x, v.y));

// etc.
```

## todo

- `writeLumpData`
- `createWad( doomObjectModel )`
- test data is megabytes, create a wad that has all lumps needed for testing
  but isn't huge

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
