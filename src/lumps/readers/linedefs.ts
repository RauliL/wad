import { LinedefFlags, Linedef } from "../types.js";
import { readInt16 } from "../../utils.js";

const size = 14;

export const linedefs = (view: DataView) => {
  const count = view.byteLength / size;

  const getFlags = (flags: number): LinedefFlags => ({
    impassable: !!(flags & 0x0001),
    blockMonster: !!(flags & 0x0002),
    doubleSided: !!(flags & 0x0004),
    upperUnpegged: !!(flags & 0x0008),
    lowerUnpegged: !!(flags & 0x0010),
    secret: !!(flags & 0x0020),
    blockSound: !!(flags & 0x0040),
    hidden: !!(flags & 0x0080),
    shown: !!(flags & 0x0100),
  });

  const getLinedef = (view: DataView, offset: number): Linedef => {
    const startVertex = readInt16(view, offset);
    const endVertex = readInt16(view, offset + 2);
    const flags = getFlags(readInt16(view, offset + 4));
    const specialType = readInt16(view, offset + 6);
    const sectorTag = readInt16(view, offset + 8);
    const rightSidedef = readInt16(view, offset + 10);
    const leftSidedef = readInt16(view, offset + 12);

    return {
      startVertex,
      endVertex,
      flags,
      specialType,
      sectorTag,
      rightSidedef,
      leftSidedef,
    };
  };

  const linedefs = Array<Linedef>(count);

  for (let i = 0; i < count; i++) {
    linedefs[i] = getLinedef(view, i * size);
  }

  return linedefs;
};
