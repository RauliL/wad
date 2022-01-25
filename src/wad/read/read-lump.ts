import { LumpInfo, Lump } from "../types";

export const readLump = (wadData: Uint8Array, info: LumpInfo) => {
  const { name, offset, length } = info;

  const data = new Uint8Array(wadData.slice(offset, offset + length));

  return <Lump>{ name, data };
};
