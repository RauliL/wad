import { readUint8 } from "../../utils.js";
import { Flat } from "../types.js";

const width = 64;
const height = 64;
const count = width * height;

export const flat = (view: DataView): Flat => {
  const data = new Uint8Array(count);

  for (let i = 0; i < count; i++) {
    data[i] = readUint8(view, i);
  }

  return { width, height, data };
};
