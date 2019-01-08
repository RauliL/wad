"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const size = 30;
exports.sidedefs = (view) => {
    const count = view.byteLength / size;
    const getSidedef = (view, offset) => {
        const x = utils_1.readInt16(view, offset);
        const y = utils_1.readInt16(view, offset + 2);
        const upper = utils_1.readAscii(view, offset + 4, offset + 12);
        const lower = utils_1.readAscii(view, offset + 12, offset + 20);
        const middle = utils_1.readAscii(view, offset + 20, offset + 28);
        const sector = utils_1.readInt16(view, offset + 28);
        return {
            x, y, upper, lower, middle, sector
        };
    };
    const sidedefs = Array(count);
    for (let i = 0; i < count; i++) {
        sidedefs[i] = getSidedef(view, i * size);
    }
    return sidedefs;
};
//# sourceMappingURL=sidedefs.js.map