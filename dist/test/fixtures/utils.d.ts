/// <reference types="node" />
import { Lump } from '../../wad/types';
export declare const stringify: (obj: any) => string;
export declare const findLump: (lumps: Lump[], name: string) => Lump;
export declare const testLumps: {
    blockmap: boolean;
    colormap: boolean;
    flat: string;
    linedefs: boolean;
    nodes: boolean;
    picture: string;
    playpal: boolean;
    pnames: boolean;
    raw: string;
    sectors: boolean;
    segs: boolean;
    sidedefs: boolean;
    ssectors: boolean;
    texture: string;
    things: boolean;
    vertexes: boolean;
};
export declare const compress: (value: any) => Buffer;
export declare const decompress: (buffer: Buffer) => any;
