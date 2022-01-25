import { readWadHeader } from "./read-wad-header.js";
import { readLumpInfoTable } from "./read-lump-info.js";
import { readLump } from "./read-lump.js";
import { Wad } from "../types.js";

export const readWad = (data: Uint8Array): Wad => {
  const header = readWadHeader(data);
  const infoTable = readLumpInfoTable(data, header);
  const lumps = infoTable.map((lumpInfo) => readLump(data, lumpInfo));
  const { type } = header;

  return { type, lumps };
};
