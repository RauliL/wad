"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readLump = (wadData, info) => {
    const { name, offset, length } = info;
    const data = new Uint8Array(wadData.slice(offset, offset + length));
    return { name, data };
};
//# sourceMappingURL=read-lump.js.map