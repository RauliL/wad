import { Vertex } from '../lumps/types';
export declare const vertexEquals: (a: Vertex, b: Vertex) => boolean;
export declare const midPoint: (start: Vertex, end: Vertex) => Vertex;
export declare const rads: (start: Vertex, end: Vertex) => number;
export declare const lineEnd: (start: Vertex, rads: number, length: number) => Vertex;
