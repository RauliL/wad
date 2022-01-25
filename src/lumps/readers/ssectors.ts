import { readInt16 } from "../../utils.js";
import { Ssector } from "../types.js";

const size = 4;

export const ssectors = (view: DataView) => {
  const count = view.byteLength / size;

  const getSsector = (view: DataView, offset: number) => {
    const count = readInt16(view, offset);
    const startSeg = readInt16(view, offset + 2);

    return <Ssector>{ count, startSeg };
  };

  const ssectors = Array<Ssector>(count);

  for (let i = 0; i < count; i++) {
    ssectors[i] = getSsector(view, i * size);
  }

  return ssectors;
};
