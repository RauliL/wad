"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const name = 'BLOCKMAP';
const headerSize = 8;
exports.writeBlockmap = (blockmap) => {
    const { x, y, columns, rows, blocks } = blockmap;
    const offsetsSize = blocks.length * 2;
    const blocksSize = blocks.reduce((sum, block) => sum + block.length * 2 + 4, 0);
    const size = headerSize + offsetsSize + blocksSize;
    const data = new Uint8Array(size);
    const view = new DataView(data.buffer);
    // header
    utils_1.writeInt16(view, 0, x);
    utils_1.writeInt16(view, 2, y);
    utils_1.writeInt16(view, 4, columns);
    utils_1.writeInt16(view, 6, rows);
    let offset = headerSize + offsetsSize;
    blocks.forEach((blocklist, i) => {
        //offset
        const offsetOffset = headerSize + 2 * i;
        utils_1.writeUint16(view, offsetOffset, offset);
        //blocks
        utils_1.writeInt16(view, offset, 0);
        offset += 2;
        blocklist.forEach(value => {
            utils_1.writeInt16(view, offset, value);
            offset += 2;
        });
        utils_1.writeInt16(view, offset, -1);
        offset += 2;
    });
    return { name, data };
};
//# sourceMappingURL=blockmap.js.map