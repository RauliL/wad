"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const size = 28;
exports.nodes = (view) => {
    const count = view.byteLength / size;
    const getNode = (view, offset) => {
        const x = utils_1.readInt16(view, offset);
        const y = utils_1.readInt16(view, offset + 2);
        const offsetX = utils_1.readInt16(view, offset + 4);
        const offsetY = utils_1.readInt16(view, offset + 6);
        const leftBBox = {
            top: utils_1.readInt16(view, offset + 8),
            bottom: utils_1.readInt16(view, offset + 10),
            left: utils_1.readInt16(view, offset + 12),
            right: utils_1.readInt16(view, offset + 14)
        };
        const rightBBox = {
            top: utils_1.readInt16(view, offset + 16),
            bottom: utils_1.readInt16(view, offset + 18),
            left: utils_1.readInt16(view, offset + 20),
            right: utils_1.readInt16(view, offset + 22)
        };
        const rightChild = utils_1.readInt16(view, offset + 24);
        const leftChild = utils_1.readInt16(view, offset + 26);
        return {
            x, y, offsetX, offsetY, leftBBox, rightBBox, rightChild, leftChild
        };
    };
    const nodes = Array(count);
    for (let i = 0; i < count; i++) {
        nodes[i] = getNode(view, i * size);
    }
    return nodes;
};
//# sourceMappingURL=nodes.js.map