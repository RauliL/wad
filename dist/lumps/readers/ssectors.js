"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const size = 4;
exports.ssectors = (view) => {
    const count = view.byteLength / size;
    const getSsector = (view, offset) => {
        const count = utils_1.readInt16(view, offset);
        const startSeg = utils_1.readInt16(view, offset + 2);
        return { count, startSeg };
    };
    const ssectors = Array(count);
    for (let i = 0; i < count; i++) {
        ssectors[i] = getSsector(view, i * size);
    }
    return ssectors;
};
//# sourceMappingURL=ssectors.js.map