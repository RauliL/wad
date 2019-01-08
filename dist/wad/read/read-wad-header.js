"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
exports.readWadHeader = (wadView) => {
    const type = utils_1.readAscii(wadView, 0, 4);
    const numberOfLumps = utils_1.readInt32(wadView, 4);
    const infoTableOffset = utils_1.readInt32(wadView, 8);
    return {
        type,
        numberOfLumps,
        infoTableOffset
    };
};
//# sourceMappingURL=read-wad-header.js.map