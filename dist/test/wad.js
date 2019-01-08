"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const fs_1 = require("fs");
const __1 = require("..");
const read_lump_info_1 = require("../wad/read/read-lump-info");
const testWadData = fs_1.readFileSync('./src/test/fixtures/doom1.wad');
const testWadView = new DataView(testWadData.buffer);
describe('wad', () => {
    it('reads a WAD', () => {
        const wad = __1.readWad(testWadView);
        assert.strictEqual(wad.type, 'IWAD');
        assert.strictEqual(wad.lumps.length, 1264);
    });
    it('writes a WAD', () => {
        const expectData = fs_1.readFileSync('./src/test/fixtures/doom1.wad');
        const wad = __1.readWad(testWadView);
        const wadView = __1.writeWad(wad);
        assert.deepEqual(wadView.buffer, expectData.buffer);
    });
    it('gets a lump info table', () => {
        const lumps = read_lump_info_1.readLumpInfoTable(testWadView);
        assert.strictEqual(lumps.length, 1264);
    });
    it('ensures string length for lump names', () => {
        const lumpData = new Uint8Array([1, 2, 3]);
        const lump = {
            name: 'GOODLUMP1',
            data: new DataView(lumpData.buffer)
        };
        const expect = {
            name: 'GOODLUMP',
            data: new DataView(lumpData.buffer)
        };
        const wadView = __1.writeWad({
            type: 'PWAD',
            lumps: [lump]
        });
        const wad = __1.readWad(wadView);
        assert.deepEqual(wad.lumps[0], expect);
    });
    it('enforces valid lump names', () => {
        const lumpData = new Uint8Array([1, 2, 3]);
        const lump = {
            name: 'bad lump name',
            data: new DataView(lumpData.buffer)
        };
        const wad = {
            type: 'PWAD',
            lumps: [lump]
        };
        assert.throws(() => __1.writeWad(wad));
    });
});
//# sourceMappingURL=wad.js.map