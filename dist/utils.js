"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readUint8 = (view, offset) => view.getUint8(offset);
exports.readInt16 = (view, offset) => view.getInt16(offset, true);
exports.readUint16 = (view, offset) => view.getUint16(offset, true);
exports.readInt32 = (view, offset) => view.getInt32(offset, true);
exports.writeInt16 = (view, offset, value) => view.setInt16(offset, value, true);
exports.writeUint16 = (view, offset, value) => view.setUint16(offset, value, true);
exports.writeInt32 = (view, offset, value) => view.setInt32(offset, value, true);
exports.readAscii = (view, offset, length) => {
    let result = '';
    for (let i = offset; i < length; i++) {
        result += String.fromCharCode(view.getUint8(i));
    }
    return result.replace(/\0/g, '');
};
exports.writeAscii = (view, offset, value) => {
    for (let i = 0; i < value.length; i++) {
        view.setUint8(offset + i, value.charCodeAt(i));
    }
};
exports.ensureStringLength = (str, len) => {
    if (str.length > len) {
        str = str.substr(0, len);
    }
    while (str.length < len) {
        str += '\0';
    }
    return str;
};
exports.lumpNameRegex = /[0-9A-Z\[\]_\-\\]+/;
//# sourceMappingURL=utils.js.map