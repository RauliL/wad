"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readLump = (wadView, info) => {
    const { name, offset, length } = info;
    const data = new DataView(wadView.buffer, offset, length);
    return { name, data };
};
//# sourceMappingURL=read-lump.js.map