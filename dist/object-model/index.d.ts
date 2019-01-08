import { Wad } from '../wad/types';
import { DoomObjectModel, ReadDoomObjectModelOptions } from './types';
export declare const defaultOptions: ReadDoomObjectModelOptions;
export declare const createObjectModel: (wad: Wad, options?: Partial<ReadDoomObjectModelOptions> | undefined) => Partial<DoomObjectModel>;
