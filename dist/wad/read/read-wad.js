"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const read_wad_header_1 = require("./read-wad-header");
const read_lump_info_1 = require("./read-lump-info");
const read_lump_1 = require("./read-lump");
exports.readWad = (wadView) => {
    const header = read_wad_header_1.readWadHeader(wadView);
    const infoTable = read_lump_info_1.readLumpInfoTable(wadView, header);
    const lumps = infoTable.map(lumpInfo => read_lump_1.readLump(wadView, lumpInfo));
    const { type } = header;
    return { type, lumps };
};
//# sourceMappingURL=read-wad.js.map