"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const size = 12;
exports.segs = (view) => {
    const count = view.byteLength / size;
    const getSeg = (view, offs) => {
        const startVertex = utils_1.readInt16(view, offs);
        const endVertex = utils_1.readInt16(view, offs + 2);
        const angle = utils_1.readInt16(view, offs + 4);
        const linedef = utils_1.readInt16(view, offs + 6);
        const direction = utils_1.readInt16(view, offs + 8);
        const offset = utils_1.readInt16(view, offs + 10);
        return {
            startVertex, endVertex, angle, linedef, direction, offset
        };
    };
    const segs = Array(count);
    for (let i = 0; i < count; i++) {
        segs[i] = getSeg(view, i * size);
    }
    return segs;
};
//# sourceMappingURL=segs.js.map