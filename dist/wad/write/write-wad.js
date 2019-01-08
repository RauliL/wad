"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const headerSize = 12;
exports.writeWad = (wad) => {
    const infoSize = wad.lumps.length * 16;
    const lumpSize = wad.lumps.reduce((sum, lump) => sum + lump.data.byteLength, 0);
    const wadSize = headerSize + lumpSize + infoSize;
    const lumpsOffset = headerSize;
    const infoTableOffset = lumpsOffset + lumpSize;
    const data = new Uint8Array(wadSize);
    const view = new DataView(data.buffer);
    //header
    utils_1.writeAscii(view, 0, utils_1.ensureStringLength(wad.type, 4));
    utils_1.writeInt32(view, 4, wad.lumps.length);
    utils_1.writeInt32(view, 8, infoTableOffset);
    let filePosition = headerSize;
    wad.lumps.forEach((lump, i) => {
        if (!utils_1.lumpNameRegex.test(lump.name))
            throw Error(`Bad lump name: ${lump.name}`);
        const infoOffset = 16 * i + infoTableOffset;
        const { buffer, byteOffset, byteLength } = lump.data;
        const lumpBytes = new Uint8Array(buffer.slice(byteOffset, byteLength));
        // lump info table entry
        utils_1.writeInt32(view, infoOffset, filePosition);
        utils_1.writeInt32(view, infoOffset + 4, lump.data.byteLength);
        utils_1.writeAscii(view, infoOffset + 8, utils_1.ensureStringLength(lump.name, 8));
        // lump
        data.set(lumpBytes, filePosition);
        filePosition += lump.data.byteLength;
    });
    return view;
};
//# sourceMappingURL=write-wad.js.map