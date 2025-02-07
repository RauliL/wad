import { ThingFlags, Thing } from "../types.js";
import { readInt16 } from "../../utils.js";

const size = 10;

export const things = (view: DataView) => {
  const count = view.byteLength / size;

  const getFlags = (flags: number): ThingFlags => ({
    easy: !!(flags & 0x0001),
    medium: !!(flags & 0x0002),
    hard: !!(flags & 0x0004),
    deaf: !!(flags & 0x0008),
    multiplayer: !!(flags & 0x0010),
  });

  const getThing = (view: DataView, offset: number): Thing => {
    const x = readInt16(view, offset);
    const y = readInt16(view, offset + 2);
    const angle = readInt16(view, offset + 4);
    const type = readInt16(view, offset + 6);
    const flags = getFlags(readInt16(view, offset + 8));

    return {
      x,
      y,
      angle,
      type,
      flags,
    };
  };

  const things = Array<Thing>(count);

  for (var i = 0; i < count; i++) {
    things[i] = getThing(view, i * size);
  }

  return things;
};
