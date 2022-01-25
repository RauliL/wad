import * as assert from "assert";
import { readFileSync } from "fs";
import { stringify, testLumps, findLump, decompress } from "./fixtures/utils";
import { readWad, readLumpData } from "..";
import { writeBlockmap } from "../lumps/writers/blockmap";

const testWadData = readFileSync("./src/test/fixtures/doom1.wad");
const testWad = readWad(testWadData);
const { lumps } = testWad;

const lumpTypes = Object.keys(testLumps);

const testLump = (lumpType: string) => {
  const lumpName: string =
    testLumps[lumpType] === true ? lumpType : testLumps[lumpType];

  it(lumpType, () => {
    const expect = decompress(
      readFileSync(`./src/test/fixtures/expect/lumps/${lumpType}.json.gz`)
    );
    const lump = findLump(lumps, lumpName.toUpperCase());
    const result = JSON.parse(stringify(readLumpData(lump.data, lumpType)));

    assert.deepEqual(result, expect);
  });
};

describe("read lumps", () => {
  lumpTypes.forEach(testLump);

  it("fails on bad lump name", () => {
    assert.throws(() => readLumpData(lumps[0].data, "bad lump name"));
  });

  it("no lumpname means raw", () => {
    const expect = decompress(
      readFileSync(`./src/test/fixtures/expect/lumps/raw.json.gz`)
    );
    const lump = findLump(lumps, "DEMO1");
    const result = JSON.parse(stringify(readLumpData(lump.data)));

    assert.deepEqual(result, expect);
  });
});

describe("write lumps", () => {
  it("blockmap", () => {
    const blockmapLump = findLump(lumps, "BLOCKMAP");
    const blockmap = readLumpData(blockmapLump.data, "BLOCKMAP");
    const outLump = writeBlockmap(blockmap);

    assert.deepEqual(outLump, blockmapLump);
  });
});
