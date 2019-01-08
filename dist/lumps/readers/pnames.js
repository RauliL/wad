"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
exports.pnames = (view) => {
    const count = utils_1.readInt32(view, 0);
    let offset = 4;
    const pnames = Array(count);
    for (var i = 0; i < count; i++) {
        pnames[i] = utils_1.readAscii(view, offset, offset + 8);
        offset += 8;
    }
    return pnames;
};
//# sourceMappingURL=pnames.js.map