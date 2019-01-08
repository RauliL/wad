"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const read_wad_header_1 = require("./read-wad-header");
const readLumpInfo = (wadView, lumpOffset, id) => {
    const offset = utils_1.readInt32(wadView, lumpOffset);
    const length = utils_1.readInt32(wadView, lumpOffset + 4);
    const name = utils_1.readAscii(wadView, lumpOffset + 8, lumpOffset + 16);
    return {
        id,
        name,
        offset,
        length
    };
};
exports.readLumpInfoTable = (wadView, header) => {
    header = header || read_wad_header_1.readWadHeader(wadView);
    const infoTable = [];
    for (let i = 0; i < header.numberOfLumps; i++) {
        const offset = 16 * i + header.infoTableOffset;
        infoTable.push(readLumpInfo(wadView, offset, i));
    }
    return infoTable;
};
//# sourceMappingURL=read-lump-info.js.map