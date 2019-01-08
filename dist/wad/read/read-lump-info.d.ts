import { WadHeader, LumpInfo } from '../types';
export declare const readLumpInfoTable: (wadView: DataView, header?: WadHeader | undefined) => LumpInfo[];
