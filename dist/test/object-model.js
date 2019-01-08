"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const fs_1 = require("fs");
const utils_1 = require("./fixtures/utils");
const __1 = require("..");
const testWadData = fs_1.readFileSync('./src/test/fixtures/doom1.wad');
const testWadView = new DataView(testWadData.buffer);
const testWad = __1.readWad(testWadView);
describe('object model', () => {
    // not present in test data
    const exclude = ['type', 'dmxgusc'];
    // names overlap and you can't get UI unless you get the whole thing
    const excludeSingle = ['ui'];
    const data = __1.createObjectModel(testWad);
    Object.keys(data).forEach(name => {
        if (exclude.includes(name))
            return;
        const expect = utils_1.decompress(fs_1.readFileSync(`./src/test/fixtures/expect/object-model/${name}.json.gz`));
        it(name, () => {
            const value = JSON.parse(utils_1.stringify(data[name]));
            assert.deepEqual(value, expect);
        });
        if (excludeSingle.includes(name))
            return;
        it(`get just ${name} via options`, () => {
            const data = __1.createObjectModel(testWad, { [name]: true });
            const value = JSON.parse(utils_1.stringify(data[name]));
            assert.deepEqual(value, expect);
        });
    });
    it('pwad', () => {
        const testWadData = fs_1.readFileSync('./src/test/fixtures/doomba.wad');
        const testWadView = new DataView(testWadData.buffer);
        const testWad = __1.readWad(testWadView);
        const data = __1.createObjectModel(testWad);
        const value = JSON.parse(utils_1.stringify(data));
        const expect = utils_1.decompress(fs_1.readFileSync(`./src/test/fixtures/expect/object-model/pwad.json.gz`));
        assert.deepEqual(value, expect);
    });
});
//# sourceMappingURL=object-model.js.map