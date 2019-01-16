"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColor = (palette, i) => {
    const p = i * 3;
    const r = palette[p];
    const g = palette[p + 1];
    const b = palette[p + 2];
    const color = `rgb( ${r}, ${g}, ${b} )`;
    return color;
};
//# sourceMappingURL=get-color.js.map