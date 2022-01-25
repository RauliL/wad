import { readInt32, readAscii } from "../../utils.js";

export const pnames = (view: DataView): string[] => {
  const count = readInt32(view, 0);

  let offset = 4;

  const pnames = Array<string>(count);

  for (var i = 0; i < count; i++) {
    pnames[i] = readAscii(view, offset, offset + 8);
    offset += 8;
  }

  return pnames;
};
