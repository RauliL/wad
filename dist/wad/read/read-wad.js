"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const read_wad_header_1 = require("./read-wad-header");
const read_lump_info_1 = require("./read-lump-info");
const read_lump_1 = require("./read-lump");
exports.readWad = (data) => {
    const header = read_wad_header_1.readWadHeader(data);
    const infoTable = read_lump_info_1.readLumpInfoTable(data, header);
    const lumps = infoTable.map(lumpInfo => read_lump_1.readLump(data, lumpInfo));
    const { type } = header;
    return { type, lumps };
};
//# sourceMappingURL=read-wad.js.map