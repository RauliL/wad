"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const fs_1 = require("fs");
const utils_1 = require("./fixtures/utils");
const __1 = require("..");
const testWadData = fs_1.readFileSync('./src/test/fixtures/doom1.wad');
const testWadView = new DataView(testWadData.buffer);
const testWad = __1.readWad(testWadView);
const { lumps } = testWad;
const lumpTypes = Object.keys(utils_1.testLumps);
const testLump = (lumpType) => {
    const lumpName = (utils_1.testLumps[lumpType] === true ?
        lumpType :
        utils_1.testLumps[lumpType]);
    it(lumpType, () => {
        const expect = utils_1.decompress(fs_1.readFileSync(`./src/test/fixtures/expect/lumps/${lumpType}.json.gz`));
        const lump = utils_1.findLump(lumps, lumpName.toUpperCase());
        const result = JSON.parse(utils_1.stringify(__1.readLumpData(lump.data, lumpType)));
        assert.deepEqual(result, expect);
    });
};
describe('lumps', () => {
    lumpTypes.forEach(testLump);
    it('fails on bad lump name', () => {
        assert.throws(() => __1.readLumpData(lumps[0].data, 'bad lump name'));
    });
    it('no lumpname means raw', () => {
        const expect = utils_1.decompress(fs_1.readFileSync(`./src/test/fixtures/expect/lumps/raw.json.gz`));
        const lump = utils_1.findLump(lumps, 'DEMO1');
        const result = JSON.parse(utils_1.stringify(__1.readLumpData(lump.data)));
        assert.deepEqual(result, expect);
    });
});
//# sourceMappingURL=lumps.js.map