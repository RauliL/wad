"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vertexEquals = (a, b) => a.x === b.x && a.y === b.y;
exports.midPoint = (start, end) => {
    const minX = Math.min(start.x, end.x);
    const maxX = Math.max(start.x, end.x);
    const minY = Math.min(start.y, end.y);
    const maxY = Math.max(start.y, end.y);
    const x = (maxX - minX) / 2 + minX;
    const y = (maxY - minY) / 2 + minY;
    return { x, y };
};
exports.rads = (start, end) => Math.atan2(end.y - start.y, end.x - start.x);
exports.lineEnd = (start, rads, length) => {
    const { x: sx, y: sy } = start;
    const x = sx + Math.cos(rads) * length;
    const y = sy + Math.sin(rads) * length;
    return { x, y };
};
//# sourceMappingURL=util.js.map