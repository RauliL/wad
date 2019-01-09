import { WadHeader, LumpInfo } from '../types';
export declare const readLumpInfoTable: (data: Uint8Array, header?: WadHeader | undefined) => LumpInfo[];
