import { readUint8 } from "../../utils.js";
import { Color } from "../types.js";

const paletteCount = 14;

export const playpal = (view: DataView): Color[][] => {
  const palettes = Array<Color[]>(paletteCount);

  for (let i = 0, offset = 0; i < paletteCount; ++i) {
    const palette = Array<Color>(256);

    for (let j = 0; j < 256; ++j) {
      const r = readUint8(view, offset++);
      const g = readUint8(view, offset++);
      const b = readUint8(view, offset++);

      palette[j] = { r, g, b };
    }

    palettes[i] = palette;
  }

  return palettes;
};
