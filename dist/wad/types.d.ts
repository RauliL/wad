export declare type WadType = 'IWAD' | 'PWAD';
export interface Wad {
    type: WadType;
    lumps: Lump[];
}
export interface Lump {
    name: string;
    data: Uint8Array;
}
export interface WadHeader {
    type: WadType;
    numberOfLumps: number;
    infoTableOffset: number;
}
export interface LumpInfo {
    id: number;
    name: string;
    offset: number;
    length: number;
}
