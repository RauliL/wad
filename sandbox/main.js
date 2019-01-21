(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rawThingData = require("./thing-data.json");
exports.thingData = rawThingData;

},{"./thing-data.json":2}],2:[function(require,module,exports){
module.exports=[
    {
        "type": 1,
        "version": "shareware",
        "radius": 16,
        "spritePrefix": "PLAY",
        "sequence": "+",
        "description": "Player 1 start"
    },
    {
        "type": 2,
        "version": "shareware",
        "radius": 16,
        "spritePrefix": "PLAY",
        "sequence": "+",
        "description": "Player 2 start"
    },
    {
        "type": 3,
        "version": "shareware",
        "radius": 16,
        "spritePrefix": "PLAY",
        "sequence": "+",
        "description": "Player 3 start"
    },
    {
        "type": 4,
        "version": "shareware",
        "radius": 16,
        "spritePrefix": "PLAY",
        "sequence": "+",
        "description": "Player 4 start"
    },
    {
        "type": 5,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "BKEY",
        "sequence": "AB",
        "description": "Blue keycard"
    },
    {
        "type": 6,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "YKEY",
        "sequence": "AB",
        "description": "Yellow keycard"
    },
    {
        "type": 7,
        "version": "retail",
        "radius": 128,
        "spritePrefix": "SPID",
        "sequence": "+",
        "description": "Spider Mastermind"
    },
    {
        "type": 8,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "BPAK",
        "sequence": "A",
        "description": "Backpack"
    },
    {
        "type": 9,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "SPOS",
        "sequence": "+",
        "description": "Former Human Sergeant"
    },
    {
        "type": 10,
        "version": "shareware",
        "radius": 16,
        "spritePrefix": "PLAY",
        "sequence": "W",
        "description": "Bloody mess"
    },
    {
        "type": 11,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "",
        "sequence": "",
        "description": "Deathmatch start"
    },
    {
        "type": 12,
        "version": "shareware",
        "radius": 16,
        "spritePrefix": "PLAY",
        "sequence": "W",
        "description": "Bloody mess"
    },
    {
        "type": 13,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "RKEY",
        "sequence": "AB",
        "description": "Red keycard"
    },
    {
        "type": 14,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "",
        "sequence": "",
        "description": "Teleport landing"
    },
    {
        "type": 15,
        "version": "shareware",
        "radius": 16,
        "spritePrefix": "PLAY",
        "sequence": "N",
        "description": "Dead player"
    },
    {
        "type": 16,
        "version": "retail",
        "radius": 40,
        "spritePrefix": "CYBR",
        "sequence": "+",
        "description": "Cyberdemon"
    },
    {
        "type": 17,
        "version": "retail",
        "radius": 20,
        "spritePrefix": "CELP",
        "sequence": "A",
        "description": "Cell charge pack"
    },
    {
        "type": 18,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "POSS",
        "sequence": "L",
        "description": "Dead former human"
    },
    {
        "type": 19,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "SPOS",
        "sequence": "L",
        "description": "Dead former sergeant"
    },
    {
        "type": 20,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "TROO",
        "sequence": "M",
        "description": "Dead imp"
    },
    {
        "type": 21,
        "version": "shareware",
        "radius": 30,
        "spritePrefix": "SARG",
        "sequence": "N",
        "description": "Dead demon"
    },
    {
        "type": 22,
        "version": "retail",
        "radius": 31,
        "spritePrefix": "HEAD",
        "sequence": "L",
        "description": "Dead cacodemon"
    },
    {
        "type": 23,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "SKUL",
        "sequence": "K",
        "description": "Dead lost soul (invisible)"
    },
    {
        "type": 24,
        "version": "shareware",
        "radius": 16,
        "spritePrefix": "POL5",
        "sequence": "A",
        "description": "Pool of blood and flesh"
    },
    {
        "type": 25,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "POL1",
        "sequence": "A",
        "description": "Impaled human"
    },
    {
        "type": 26,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "POL6",
        "sequence": "AB",
        "description": "Twitching impaled human"
    },
    {
        "type": 27,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "POL4",
        "sequence": "A",
        "description": "Skull on a pole"
    },
    {
        "type": 28,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "POL2",
        "sequence": "A",
        "description": "Five skulls \"shish kebab"
    },
    {
        "type": 29,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "POL3",
        "sequence": "AB",
        "description": "Pile of skulls and candles"
    },
    {
        "type": 30,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "COL1",
        "sequence": "A",
        "description": "Tall green pillar"
    },
    {
        "type": 31,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "COL2",
        "sequence": "A",
        "description": "Short green pillar"
    },
    {
        "type": 32,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "COL3",
        "sequence": "A",
        "description": "Tall red pillar"
    },
    {
        "type": 33,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "COL4",
        "sequence": "A",
        "description": "Short red pillar"
    },
    {
        "type": 34,
        "version": "shareware",
        "radius": 16,
        "spritePrefix": "CAND",
        "sequence": "A",
        "description": "Candle"
    },
    {
        "type": 35,
        "version": "shareware",
        "radius": 16,
        "spritePrefix": "CBRA",
        "sequence": "A",
        "description": "Candelabra"
    },
    {
        "type": 36,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "COL5",
        "sequence": "AB",
        "description": "Short green pillar with beating heart"
    },
    {
        "type": 37,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "COL6",
        "sequence": "A",
        "description": "Short red pillar with skull"
    },
    {
        "type": 38,
        "version": "retail",
        "radius": 20,
        "spritePrefix": "RSKU",
        "sequence": "AB",
        "description": "Red skull key"
    },
    {
        "type": 39,
        "version": "retail",
        "radius": 20,
        "spritePrefix": "YSKU",
        "sequence": "AB",
        "description": "Yellow skull key"
    },
    {
        "type": 40,
        "version": "retail",
        "radius": 20,
        "spritePrefix": "BSKU",
        "sequence": "AB",
        "description": "Blue skull key"
    },
    {
        "type": 41,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "CEYE",
        "sequence": "ABCB",
        "description": "Evil eye"
    },
    {
        "type": 42,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "FSKU",
        "sequence": "ABC",
        "description": "Floating skull"
    },
    {
        "type": 43,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "TRE1",
        "sequence": "A",
        "description": "Burnt tree"
    },
    {
        "type": 44,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "TBLU",
        "sequence": "ABCD",
        "description": "Tall blue firestick"
    },
    {
        "type": 45,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "TGRN",
        "sequence": "ABCD",
        "description": "Tall green firestick"
    },
    {
        "type": 46,
        "version": "shareware",
        "radius": 16,
        "spritePrefix": "TRED",
        "sequence": "ABCD",
        "description": "Tall red firestick"
    },
    {
        "type": 47,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "SMIT",
        "sequence": "A",
        "description": "Stalagmite"
    },
    {
        "type": 48,
        "version": "shareware",
        "radius": 16,
        "spritePrefix": "ELEC",
        "sequence": "A",
        "description": "Tall techno pillar"
    },
    {
        "type": 49,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "GOR1",
        "sequence": "ABCB",
        "description": "Hanging victim, twitching"
    },
    {
        "type": 50,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "GOR2",
        "sequence": "A",
        "description": "Hanging victim, arms out"
    },
    {
        "type": 51,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "GOR3",
        "sequence": "A",
        "description": "Hanging victim, one-legged"
    },
    {
        "type": 52,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "GOR4",
        "sequence": "A",
        "description": "Hanging pair of legs"
    },
    {
        "type": 53,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "GOR5",
        "sequence": "A",
        "description": "Hanging leg"
    },
    {
        "type": 54,
        "version": "retail",
        "radius": 32,
        "spritePrefix": "TRE2",
        "sequence": "A",
        "description": "Large brown tree"
    },
    {
        "type": 55,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "SMBT",
        "sequence": "ABCD",
        "description": "Short blue firestick"
    },
    {
        "type": 56,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "SMGT",
        "sequence": "ABCD",
        "description": "Short green firestick"
    },
    {
        "type": 57,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "SMRT",
        "sequence": "ABCD",
        "description": "Short red firestick"
    },
    {
        "type": 58,
        "version": "shareware",
        "radius": 30,
        "spritePrefix": "SARG",
        "sequence": "+",
        "description": "Spectre"
    },
    {
        "type": 59,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "GOR2",
        "sequence": "A",
        "description": "Hanging victim, arms out"
    },
    {
        "type": 60,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "GOR4",
        "sequence": "A",
        "description": "Hanging pair of legs"
    },
    {
        "type": 61,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "GOR3",
        "sequence": "A",
        "description": "Hanging victim, one-legged"
    },
    {
        "type": 62,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "GOR5",
        "sequence": "A",
        "description": "Hanging leg"
    },
    {
        "type": 63,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "GOR1",
        "sequence": "ABCB",
        "description": "Hanging victim, twitching"
    },
    {
        "type": 64,
        "version": "doom2",
        "radius": 20,
        "spritePrefix": "VILE",
        "sequence": "+",
        "description": "Arch-Vile"
    },
    {
        "type": 65,
        "version": "doom2",
        "radius": 20,
        "spritePrefix": "CPOS",
        "sequence": "+",
        "description": "Chaingunner"
    },
    {
        "type": 66,
        "version": "doom2",
        "radius": 20,
        "spritePrefix": "SKEL",
        "sequence": "+",
        "description": "Revenant"
    },
    {
        "type": 67,
        "version": "doom2",
        "radius": 48,
        "spritePrefix": "FATT",
        "sequence": "+",
        "description": "Mancubus"
    },
    {
        "type": 68,
        "version": "doom2",
        "radius": 64,
        "spritePrefix": "BSPI",
        "sequence": "+",
        "description": "Arachnotron"
    },
    {
        "type": 69,
        "version": "doom2",
        "radius": 24,
        "spritePrefix": "BOS2",
        "sequence": "+",
        "description": "Hell Knight"
    },
    {
        "type": 70,
        "version": "doom2",
        "radius": 10,
        "spritePrefix": "FCAN",
        "sequence": "ABC",
        "description": "Burning barrel"
    },
    {
        "type": 71,
        "version": "doom2",
        "radius": 31,
        "spritePrefix": "PAIN",
        "sequence": "+",
        "description": "Pain Elemental"
    },
    {
        "type": 72,
        "version": "doom2",
        "radius": 16,
        "spritePrefix": "KEEN",
        "sequence": "A+",
        "description": "Commander Keen"
    },
    {
        "type": 73,
        "version": "doom2",
        "radius": 16,
        "spritePrefix": "HDB1",
        "sequence": "A",
        "description": "Hanging victim, guts removed"
    },
    {
        "type": 74,
        "version": "doom2",
        "radius": 16,
        "spritePrefix": "HDB2",
        "sequence": "A",
        "description": "Hanging victim, guts and brain removed"
    },
    {
        "type": 75,
        "version": "doom2",
        "radius": 16,
        "spritePrefix": "HDB3",
        "sequence": "A",
        "description": "Hanging torso, looking down"
    },
    {
        "type": 76,
        "version": "doom2",
        "radius": 16,
        "spritePrefix": "HDB4",
        "sequence": "A",
        "description": "Hanging torso, open skull"
    },
    {
        "type": 77,
        "version": "doom2",
        "radius": 16,
        "spritePrefix": "HDB5",
        "sequence": "A",
        "description": "Hanging torso, looking up"
    },
    {
        "type": 78,
        "version": "doom2",
        "radius": 16,
        "spritePrefix": "HDB6",
        "sequence": "A",
        "description": "Hanging torso, brain removed"
    },
    {
        "type": 79,
        "version": "doom2",
        "radius": 16,
        "spritePrefix": "POB1",
        "sequence": "A",
        "description": "Pool of blood"
    },
    {
        "type": 80,
        "version": "doom2",
        "radius": 16,
        "spritePrefix": "POB2",
        "sequence": "A",
        "description": "Pool of blood"
    },
    {
        "type": 81,
        "version": "doom2",
        "radius": 16,
        "spritePrefix": "BRS1",
        "sequence": "A",
        "description": "Pool of brains"
    },
    {
        "type": 82,
        "version": "doom2",
        "radius": 20,
        "spritePrefix": "SGN2",
        "sequence": "A",
        "description": "Super shotgun"
    },
    {
        "type": 83,
        "version": "doom2",
        "radius": 20,
        "spritePrefix": "MEGA",
        "sequence": "ABCD",
        "description": "Megasphere"
    },
    {
        "type": 84,
        "version": "doom2",
        "radius": 20,
        "spritePrefix": "SSWV",
        "sequence": "+",
        "description": "Wolfenstein SS"
    },
    {
        "type": 85,
        "version": "doom2",
        "radius": 16,
        "spritePrefix": "TLMP",
        "sequence": "ABCD",
        "description": "Tall techno floor lamp"
    },
    {
        "type": 86,
        "version": "doom2",
        "radius": 16,
        "spritePrefix": "TLP2",
        "sequence": "ABCD",
        "description": "Short techno floor lamp"
    },
    {
        "type": 87,
        "version": "doom2",
        "radius": 0,
        "spritePrefix": "",
        "sequence": "",
        "description": "Spawn spot"
    },
    {
        "type": 88,
        "version": "doom2",
        "radius": 16,
        "spritePrefix": "BBRN",
        "sequence": "+",
        "description": "Boss Brain"
    },
    {
        "type": 89,
        "version": "doom2",
        "radius": 20,
        "spritePrefix": "",
        "sequence": "",
        "description": "Spawn shooter"
    },
    {
        "type": 2001,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "SHOT",
        "sequence": "A",
        "description": "Shotgun"
    },
    {
        "type": 2002,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "MGUN",
        "sequence": "A",
        "description": "Chaingun"
    },
    {
        "type": 2003,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "LAUN",
        "sequence": "A",
        "description": "Rocket launcher"
    },
    {
        "type": 2004,
        "version": "retail",
        "radius": 20,
        "spritePrefix": "PLAS",
        "sequence": "A",
        "description": "Plasma rifle"
    },
    {
        "type": 2005,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "CSAW",
        "sequence": "A",
        "description": "Chainsaw"
    },
    {
        "type": 2006,
        "version": "retail",
        "radius": 20,
        "spritePrefix": "BFUG",
        "sequence": "A",
        "description": "BFG 9000"
    },
    {
        "type": 2007,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "CLIP",
        "sequence": "A",
        "description": "Ammo clip"
    },
    {
        "type": 2008,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "SHEL",
        "sequence": "A",
        "description": "Shotgun shells"
    },
    {
        "type": 2010,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "ROCK",
        "sequence": "A",
        "description": "Rocket"
    },
    {
        "type": 2011,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "STIM",
        "sequence": "A",
        "description": "Stimpack"
    },
    {
        "type": 2012,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "MEDI",
        "sequence": "A",
        "description": "Medikit"
    },
    {
        "type": 2013,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "SOUL",
        "sequence": "ABCDCB",
        "description": "Soul sphere"
    },
    {
        "type": 2014,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "BON1",
        "sequence": "ABCDCB",
        "description": "Health potion"
    },
    {
        "type": 2015,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "BON2",
        "sequence": "ABCDCB",
        "description": "Spiritual armor"
    },
    {
        "type": 2018,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "ARM1",
        "sequence": "AB",
        "description": "Green armor"
    },
    {
        "type": 2019,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "ARM2",
        "sequence": "AB",
        "description": "Blue armor"
    },
    {
        "type": 2022,
        "version": "retail",
        "radius": 20,
        "spritePrefix": "PINV",
        "sequence": "ABCD",
        "description": "Invulnerability"
    },
    {
        "type": 2023,
        "version": "retail",
        "radius": 20,
        "spritePrefix": "PSTR",
        "sequence": "A",
        "description": "Berserk"
    },
    {
        "type": 2024,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "PINS",
        "sequence": "ABCD",
        "description": "Invisibility"
    },
    {
        "type": 2025,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "SUIT",
        "sequence": "A",
        "description": "Radiation suit"
    },
    {
        "type": 2026,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "PMAP",
        "sequence": "ABCDCB",
        "description": "Computer map"
    },
    {
        "type": 2028,
        "version": "shareware",
        "radius": 16,
        "spritePrefix": "COLU",
        "sequence": "A",
        "description": "Floor lamp"
    },
    {
        "type": 2035,
        "version": "shareware",
        "radius": 10,
        "spritePrefix": "BAR1",
        "sequence": "AB+",
        "description": "Barrel"
    },
    {
        "type": 2045,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "PVIS",
        "sequence": "AB",
        "description": "Light amplification visor"
    },
    {
        "type": 2046,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "BROK",
        "sequence": "A",
        "description": "Box of rockets"
    },
    {
        "type": 2047,
        "version": "retail",
        "radius": 20,
        "spritePrefix": "CELL",
        "sequence": "A",
        "description": "Cell charge"
    },
    {
        "type": 2048,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "AMMO",
        "sequence": "A",
        "description": "Box of ammo"
    },
    {
        "type": 2049,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "SBOX",
        "sequence": "A",
        "description": "Box of shells"
    },
    {
        "type": 3001,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "TROO",
        "sequence": "+",
        "description": "Imp"
    },
    {
        "type": 3002,
        "version": "shareware",
        "radius": 30,
        "spritePrefix": "SARG",
        "sequence": "+",
        "description": "Demon"
    },
    {
        "type": 3003,
        "version": "shareware",
        "radius": 24,
        "spritePrefix": "BOSS",
        "sequence": "+",
        "description": "Baron of Hell"
    },
    {
        "type": 3004,
        "version": "shareware",
        "radius": 20,
        "spritePrefix": "POSS",
        "sequence": "+",
        "description": "Former Human Trooper"
    },
    {
        "type": 3005,
        "version": "retail",
        "radius": 31,
        "spritePrefix": "HEAD",
        "sequence": "+",
        "description": "Cacodemon"
    },
    {
        "type": 3006,
        "version": "retail",
        "radius": 16,
        "spritePrefix": "SKUL",
        "sequence": "+",
        "description": "Lost Soul"
    }
]

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const things_1 = require("./readers/things");
const linedefs_1 = require("./readers/linedefs");
const sidedefs_1 = require("./readers/sidedefs");
const vertexes_1 = require("./readers/vertexes");
const segs_1 = require("./readers/segs");
const ssectors_1 = require("./readers/ssectors");
const nodes_1 = require("./readers/nodes");
const sectors_1 = require("./readers/sectors");
const playpal_1 = require("./readers/playpal");
const pnames_1 = require("./readers/pnames");
const texture_1 = require("./readers/texture");
const colormap_1 = require("./readers/colormap");
const flat_1 = require("./readers/flat");
const picture_1 = require("./readers/picture");
const blockmap_1 = require("./readers/blockmap");
const raw_1 = require("./readers/raw");
exports.readers = {
    things: things_1.things, linedefs: linedefs_1.linedefs, sidedefs: sidedefs_1.sidedefs, vertexes: vertexes_1.vertexes, segs: segs_1.segs, ssectors: ssectors_1.ssectors, nodes: nodes_1.nodes, sectors: sectors_1.sectors, playpal: playpal_1.playpal,
    pnames: pnames_1.pnames, texture: texture_1.texture, colormap: colormap_1.colormap, flat: flat_1.flat, picture: picture_1.picture, blockmap: blockmap_1.blockmap, raw: raw_1.raw,
    reject: raw_1.raw
};
exports.readLumpData = (lumpData, lumpType = 'raw') => {
    const name = lumpType.toLowerCase().trim();
    const reader = exports.readers[name];
    if (!reader)
        throw Error(`Unexpected lumpType ${name}`);
    return reader(new DataView(lumpData.buffer));
};

},{"./readers/blockmap":4,"./readers/colormap":5,"./readers/flat":6,"./readers/linedefs":7,"./readers/nodes":8,"./readers/picture":9,"./readers/playpal":10,"./readers/pnames":11,"./readers/raw":12,"./readers/sectors":13,"./readers/segs":14,"./readers/sidedefs":15,"./readers/ssectors":16,"./readers/texture":17,"./readers/things":18,"./readers/vertexes":19}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
exports.blockmap = (view) => {
    const x = utils_1.readInt16(view, 0);
    const y = utils_1.readInt16(view, 2);
    const columns = utils_1.readInt16(view, 4);
    const rows = utils_1.readInt16(view, 6);
    const size = columns * rows;
    const blockOffsets = Array(size);
    let offset = 8;
    for (let i = 0; i < size; i++) {
        //offsets are short, but we want bytes
        blockOffsets[i] = utils_1.readUint16(view, offset) * 2;
        offset += 2;
    }
    const blocks = [];
    for (let i = 0; i < size; i++) {
        offset = blockOffsets[i] + 2; //skip leading 0
        const linedefs = [];
        let linedef;
        while (linedef !== -1) {
            linedef = utils_1.readInt16(view, offset);
            offset += 2;
            if (linedef !== -1) {
                linedefs.push(linedef);
            }
        }
        blocks.push(new Int16Array(linedefs));
    }
    return { x, y, columns, rows, blocks };
};

},{"../../utils":30}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const count = 34;
const size = 256;
exports.colormap = (view) => {
    const maps = [];
    let offset = 0;
    for (let m = 0; m < count; m++) {
        let map = new Uint8Array(size);
        for (let i = 0; i < size; i++) {
            map[i] = utils_1.readUint8(view, offset);
            offset++;
        }
        maps.push(map);
    }
    return maps;
};

},{"../../utils":30}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const width = 64;
const height = 64;
const count = width * height;
exports.flat = (view) => {
    const data = new Uint8Array(count);
    for (let i = 0; i < count; i++) {
        data[i] = utils_1.readUint8(view, i);
    }
    return { width, height, data };
};

},{"../../utils":30}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const size = 14;
exports.linedefs = (view) => {
    const count = view.byteLength / size;
    const getFlags = flags => ({
        impassable: !!(flags & 0x0001),
        blockMonster: !!(flags & 0x0002),
        doubleSided: !!(flags & 0x0004),
        upperUnpegged: !!(flags & 0x0008),
        lowerUnpegged: !!(flags & 0x0010),
        secret: !!(flags & 0x0020),
        blockSound: !!(flags & 0x0040),
        hidden: !!(flags & 0x0080),
        shown: !!(flags & 0x0100)
    });
    const getLinedef = (view, offset) => {
        const startVertex = utils_1.readInt16(view, offset);
        const endVertex = utils_1.readInt16(view, offset + 2);
        const flags = getFlags(utils_1.readInt16(view, offset + 4));
        const specialType = utils_1.readInt16(view, offset + 6);
        const sectorTag = utils_1.readInt16(view, offset + 8);
        const rightSidedef = utils_1.readInt16(view, offset + 10);
        const leftSidedef = utils_1.readInt16(view, offset + 12);
        return {
            startVertex, endVertex, flags, specialType, sectorTag, rightSidedef,
            leftSidedef
        };
    };
    const linedefs = Array(count);
    for (let i = 0; i < count; i++) {
        linedefs[i] = getLinedef(view, i * size);
    }
    return linedefs;
};

},{"../../utils":30}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const size = 28;
exports.nodes = (view) => {
    const count = view.byteLength / size;
    const getNode = (view, offset) => {
        const x = utils_1.readInt16(view, offset);
        const y = utils_1.readInt16(view, offset + 2);
        const offsetX = utils_1.readInt16(view, offset + 4);
        const offsetY = utils_1.readInt16(view, offset + 6);
        const leftBBox = {
            top: utils_1.readInt16(view, offset + 8),
            bottom: utils_1.readInt16(view, offset + 10),
            left: utils_1.readInt16(view, offset + 12),
            right: utils_1.readInt16(view, offset + 14)
        };
        const rightBBox = {
            top: utils_1.readInt16(view, offset + 16),
            bottom: utils_1.readInt16(view, offset + 18),
            left: utils_1.readInt16(view, offset + 20),
            right: utils_1.readInt16(view, offset + 22)
        };
        const rightChild = utils_1.readInt16(view, offset + 24);
        const leftChild = utils_1.readInt16(view, offset + 26);
        return {
            x, y, offsetX, offsetY, leftBBox, rightBBox, rightChild, leftChild
        };
    };
    const nodes = Array(count);
    for (let i = 0; i < count; i++) {
        nodes[i] = getNode(view, i * size);
    }
    return nodes;
};

},{"../../utils":30}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
// nb this is just a hack, should actually search for an unused color and use
// that instead
const transparent = 247;
exports.picture = (view) => {
    const width = utils_1.readInt16(view, 0);
    const height = utils_1.readInt16(view, 2);
    const left = utils_1.readInt16(view, 4);
    const top = utils_1.readInt16(view, 6);
    const columnOffsets = [];
    const data = new Uint8Array(width * height);
    data.fill(transparent);
    let offset = 8;
    for (let i = 0; i < width; i++) {
        columnOffsets.push(utils_1.readInt32(view, offset));
        offset += 4;
    }
    for (let x = 0; x < width; x++) {
        offset = columnOffsets[x];
        let rowStart = 0;
        while (rowStart !== 255) {
            rowStart = utils_1.readUint8(view, offset);
            offset++;
            if (rowStart === 255)
                break;
            let pixelCount = utils_1.readUint8(view, offset);
            offset++;
            //skip dummy byte
            offset++;
            for (let j = 0; j < pixelCount; j++) {
                const y = j + rowStart;
                const i = y * width + x;
                const c = utils_1.readUint8(view, offset);
                data[i] = c;
                offset++;
            }
            //skip dummy byte
            offset++;
        }
    }
    return {
        width, height, left, top, data, transparent
    };
};

},{"../../utils":30}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const paletteCount = 14;
exports.playpal = (view) => {
    const palettes = Array(paletteCount);
    let offset = 0;
    for (var i = 0; i < paletteCount; i++) {
        const palette = new Uint8Array(768);
        for (let j = 0; j < 256; j++) {
            let r = utils_1.readUint8(view, offset);
            offset++;
            let g = utils_1.readUint8(view, offset);
            offset++;
            let b = utils_1.readUint8(view, offset);
            offset++;
            const p = j * 3;
            palette[p] = r;
            palette[p + 1] = g;
            palette[p + 2] = b;
        }
        palettes[i] = palette;
    }
    return palettes;
};

},{"../../utils":30}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
exports.pnames = (view) => {
    const count = utils_1.readInt32(view, 0);
    let offset = 4;
    const pnames = Array(count);
    for (var i = 0; i < count; i++) {
        pnames[i] = utils_1.readAscii(view, offset, offset + 8);
        offset += 8;
    }
    return pnames;
};

},{"../../utils":30}],12:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.raw = (view) => view;

},{}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const size = 26;
exports.sectors = (view) => {
    const count = view.byteLength / size;
    const getSector = (view, offset) => {
        const floorHeight = utils_1.readInt16(view, offset);
        const ceilingHeight = utils_1.readInt16(view, offset + 2);
        const floor = utils_1.readAscii(view, offset + 4, offset + 12);
        const ceiling = utils_1.readAscii(view, offset + 12, offset + 20);
        const light = utils_1.readInt16(view, offset + 20);
        const type = utils_1.readInt16(view, offset + 22);
        const tag = utils_1.readInt16(view, offset + 24);
        return {
            floorHeight, ceilingHeight, floor, ceiling, light, type, tag
        };
    };
    const sectors = Array(count);
    for (let i = 0; i < count; i++) {
        sectors[i] = getSector(view, i * size);
    }
    return sectors;
};

},{"../../utils":30}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const size = 12;
exports.segs = (view) => {
    const count = view.byteLength / size;
    const getSeg = (view, offs) => {
        const startVertex = utils_1.readInt16(view, offs);
        const endVertex = utils_1.readInt16(view, offs + 2);
        const angle = utils_1.readInt16(view, offs + 4);
        const linedef = utils_1.readInt16(view, offs + 6);
        const direction = utils_1.readInt16(view, offs + 8);
        const offset = utils_1.readInt16(view, offs + 10);
        return {
            startVertex, endVertex, angle, linedef, direction, offset
        };
    };
    const segs = Array(count);
    for (let i = 0; i < count; i++) {
        segs[i] = getSeg(view, i * size);
    }
    return segs;
};

},{"../../utils":30}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const size = 30;
exports.sidedefs = (view) => {
    const count = view.byteLength / size;
    const getSidedef = (view, offset) => {
        const x = utils_1.readInt16(view, offset);
        const y = utils_1.readInt16(view, offset + 2);
        const upper = utils_1.readAscii(view, offset + 4, offset + 12);
        const lower = utils_1.readAscii(view, offset + 12, offset + 20);
        const middle = utils_1.readAscii(view, offset + 20, offset + 28);
        const sector = utils_1.readInt16(view, offset + 28);
        return {
            x, y, upper, lower, middle, sector
        };
    };
    const sidedefs = Array(count);
    for (let i = 0; i < count; i++) {
        sidedefs[i] = getSidedef(view, i * size);
    }
    return sidedefs;
};

},{"../../utils":30}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const size = 4;
exports.ssectors = (view) => {
    const count = view.byteLength / size;
    const getSsector = (view, offset) => {
        const count = utils_1.readInt16(view, offset);
        const startSeg = utils_1.readInt16(view, offset + 2);
        return { count, startSeg };
    };
    const ssectors = Array(count);
    for (let i = 0; i < count; i++) {
        ssectors[i] = getSsector(view, i * size);
    }
    return ssectors;
};

},{"../../utils":30}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
exports.texture = (view) => {
    const textureCount = utils_1.readInt32(view, 0);
    const textures = Array(textureCount);
    for (let i = 0; i < textureCount; i++) {
        let offset = utils_1.readInt32(view, i * 4 + 4);
        const texture = {
            name: utils_1.readAscii(view, offset, offset + 8),
            masked: !!utils_1.readInt32(view, offset + 8),
            width: utils_1.readInt16(view, offset + 12),
            height: utils_1.readInt16(view, offset + 14),
            patches: []
        };
        const patchCount = utils_1.readInt16(view, offset + 20);
        offset += 22;
        for (var j = 0; j < patchCount; j++) {
            texture.patches.push({
                x: utils_1.readInt16(view, offset),
                y: utils_1.readInt16(view, offset + 2),
                patch: utils_1.readInt16(view, offset + 4),
                stepDir: utils_1.readInt16(view, offset + 6),
                colormap: utils_1.readInt16(view, offset + 8)
            });
            offset += 10;
        }
        textures[i] = texture;
    }
    return textures;
};

},{"../../utils":30}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const size = 10;
exports.things = (view) => {
    const count = view.byteLength / size;
    const getFlags = flags => ({
        easy: !!(flags & 0x0001),
        medium: !!(flags & 0x0002),
        hard: !!(flags & 0x0004),
        deaf: !!(flags & 0x0008),
        multiplayer: !!(flags & 0x0010)
    });
    const getThing = (view, offset) => {
        const x = utils_1.readInt16(view, offset);
        const y = utils_1.readInt16(view, offset + 2);
        const angle = utils_1.readInt16(view, offset + 4);
        const type = utils_1.readInt16(view, offset + 6);
        const flags = getFlags(utils_1.readInt16(view, offset + 8));
        return {
            x, y, angle, type, flags
        };
    };
    const things = Array(count);
    for (var i = 0; i < count; i++) {
        things[i] = getThing(view, i * size);
    }
    return things;
};

},{"../../utils":30}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const size = 4;
exports.vertexes = (view) => {
    const count = view.byteLength / size;
    const getVertex = (view, offset) => {
        const x = utils_1.readInt16(view, offset);
        const y = utils_1.readInt16(view, offset + 2);
        return { x, y };
    };
    const vertexes = Array(count);
    for (let i = 0; i < count; i++) {
        vertexes[i] = getVertex(view, i * size);
    }
    return vertexes;
};

},{"../../utils":30}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const read_lump_data_1 = require("../lumps/read-lump-data");
//should be a unique lump name, otherwise associations are unreliable
const getLump = (wad, nameToIndexMap, processed, name, lumpType = name) => {
    const index = nameToIndexMap[name];
    if (index >= 0) {
        processed[index] = true;
        return read_lump_data_1.readLumpData(wad.lumps[index].data, lumpType);
    }
};
const getLevelIndices = (lumps) => lumps.reduce((indices, lump, i) => {
    if (lump.name === 'THINGS') {
        indices.push(i - 1);
    }
    return indices;
}, Array());
const getLevel = (wad, index, processed) => {
    const lumpNames = [
        'things', 'linedefs', 'sidedefs', 'vertexes', 'segs', 'ssectors', 'nodes',
        'sectors', 'reject', 'blockmap'
    ];
    processed[index] = true;
    return lumpNames.reduce((map, lumpName, i) => {
        processed[index + i + 1] = true;
        map[lumpName] = read_lump_data_1.readLumpData(wad.lumps[index + i + 1].data, lumpName);
        return map;
    }, {
        name: wad.lumps[index].name
    });
};
const getLevels = (wad, processed) => {
    const levelIndices = getLevelIndices(wad.lumps);
    const levels = Array(levelIndices.length);
    levelIndices.forEach((index, i) => levels[i] = getLevel(wad, index, processed));
    return levels;
};
const getFlats = (wad, nameToIndexMap, processed) => {
    const start = nameToIndexMap['F_START'];
    const end = nameToIndexMap['F_END'];
    const flatMap = {};
    if (start && end) {
        for (let i = start; i <= end; i++) {
            const lump = wad.lumps[i];
            if (lump.data.byteLength > 0) {
                flatMap[lump.name] = read_lump_data_1.readLumpData(wad.lumps[i].data, 'flat');
            }
            processed[i] = true;
        }
    }
    return flatMap;
};
const getSprites = (wad, nameToIndexMap, processed) => {
    const start = nameToIndexMap['S_START'];
    const end = nameToIndexMap['S_END'];
    const sprites = {};
    if (start && end) {
        for (let i = start; i <= end; i++) {
            const lump = wad.lumps[i];
            if (lump.data.byteLength > 0) {
                sprites[lump.name] = read_lump_data_1.readLumpData(wad.lumps[i].data, 'picture');
            }
            processed[i] = true;
        }
    }
    return sprites;
};
const getPnames = (wad, nameToIndexMap, processed) => getLump(wad, nameToIndexMap, processed, 'PNAMES') || [];
const markProcessed = (name, nameToIndexMap, processed) => {
    if (nameToIndexMap[name] >= 0) {
        processed[nameToIndexMap[name]] = true;
    }
};
const getPatches = (wad, nameToIndexMap, processed) => {
    const markers = [
        'P_START', 'P_END', 'P1_START', 'P1_END', 'P2_START', 'P2_END', 'P3_START',
        'P3_END'
    ];
    markers.forEach(name => markProcessed(name, nameToIndexMap, processed));
    // sometimes pnames are lower case
    const names = getPnames(wad, nameToIndexMap, processed).map(p => p.toUpperCase());
    const patches = {};
    names.forEach(name => {
        patches[name] = getLump(wad, nameToIndexMap, processed, name, 'picture');
    });
    return patches;
};
const getPlayPal = (wad, nameToIndexMap, processed) => getLump(wad, nameToIndexMap, processed, 'PLAYPAL') || [];
const getColorMap = (wad, nameToIndexMap, processed) => getLump(wad, nameToIndexMap, processed, 'COLORMAP') || [];
const concatIfPresent = (...arrs) => {
    const result = Array();
    arrs.forEach(a => {
        if (a)
            result.push(...a);
    });
    return result;
};
const getTextures = (wad, nameToIndexMap, processed) => {
    const t1 = getLump(wad, nameToIndexMap, processed, 'TEXTURE1', 'texture');
    const t2 = getLump(wad, nameToIndexMap, processed, 'TEXTURE2', 'texture');
    return concatIfPresent(t1, t2);
};
const getSounds = (wad, nameToIndexMap, processed) => {
    const names = Object.keys(nameToIndexMap).filter(name => name.indexOf('DP') === 0 || name.indexOf('DS') === 0);
    const sounds = {};
    names.forEach(name => {
        sounds[name] = getLump(wad, nameToIndexMap, processed, name, 'raw');
    });
    return sounds;
};
const getMusic = (wad, nameToIndexMap, processed) => {
    const names = Object.keys(nameToIndexMap).filter(name => name.indexOf('D_') === 0);
    const music = {};
    names.forEach(name => {
        music[name] = getLump(wad, nameToIndexMap, processed, name, 'raw');
    });
    return music;
};
const getDemos = (wad, nameToIndexMap, processed) => {
    const names = Object.keys(nameToIndexMap).filter(name => name.indexOf('DEMO') === 0);
    const demos = {};
    names.forEach(name => {
        demos[name] = getLump(wad, nameToIndexMap, processed, name, 'raw');
    });
    return demos;
};
const getUi = (wad, nameToIndexMap, processed) => {
    const prefixes = [
        'HELP', 'CREDIT', 'TITLEPIC', 'VICTORY', 'END', 'INTERPIC', 'DMENUPIC',
        'BOSSBACK', 'AMM', 'ST', 'M_', 'BRDR', 'WI', 'PFUB', 'CWILV'
    ];
    const names = Object.keys(nameToIndexMap).filter(name => !processed[nameToIndexMap[name]] &&
        !!prefixes.find(prefix => name.indexOf(prefix) === 0));
    const ui = {};
    names.forEach(name => {
        ui[name] = getLump(wad, nameToIndexMap, processed, name, 'picture');
    });
    return ui;
};
exports.defaultOptions = {
    type: 'IWAD',
    colormap: true,
    demos: true,
    dmxgus: true,
    dmxgusc: true,
    endoom: true,
    flats: true,
    genmidi: true,
    levels: true,
    music: true,
    playpal: true,
    patches: true,
    sounds: true,
    sprites: true,
    textures: true,
    ui: true
};
exports.createObjectModel = (wad, options) => {
    if (!options)
        options = exports.defaultOptions;
    const processed = Array(wad.lumps.length);
    const indexMap = {};
    wad.lumps.forEach((lump, i) => {
        processed[i] = false;
        //this method means that if there are multiple lumps with the same name
        //that you can only ever get the last one
        indexMap[lump.name] = i;
    });
    const type = wad.type;
    const objectModel = { type };
    if (options.colormap)
        objectModel.colormap = getColorMap(wad, indexMap, processed);
    if (options.demos)
        objectModel.demos = getDemos(wad, indexMap, processed);
    if (options.dmxgus)
        objectModel.dmxgus = getLump(wad, indexMap, processed, 'DMXGUS', 'raw');
    if (options.dmxgusc)
        objectModel.dmxgusc = getLump(wad, indexMap, processed, 'DMXGUSC', 'raw');
    if (options.endoom)
        objectModel.endoom = getLump(wad, indexMap, processed, 'ENDOOM', 'raw');
    if (options.flats)
        objectModel.flats = getFlats(wad, indexMap, processed);
    if (options.genmidi)
        objectModel.genmidi = getLump(wad, indexMap, processed, 'GENMIDI', 'raw');
    if (options.levels)
        objectModel.levels = getLevels(wad, processed);
    if (options.music)
        objectModel.music = getMusic(wad, indexMap, processed);
    if (options.playpal)
        objectModel.playpal = getPlayPal(wad, indexMap, processed);
    if (options.patches)
        objectModel.patches = getPatches(wad, indexMap, processed);
    if (options.sounds)
        objectModel.sounds = getSounds(wad, indexMap, processed);
    if (options.sprites)
        objectModel.sprites = getSprites(wad, indexMap, processed);
    if (options.textures)
        objectModel.textures = getTextures(wad, indexMap, processed);
    //must be called last or it catches things it shouldn't due to sloppy prefix matching
    if (options.ui)
        objectModel.ui = getUi(wad, indexMap, processed);
    return objectModel;
};

},{"../lumps/read-lump-data":3}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_color_1 = require("./get-color");
exports.colormapToCanvas = (colormap, palette, block = 16) => {
    const cw = colormap.length;
    const ch = colormap[0].length;
    const canvas = document.createElement('canvas');
    const width = block * cw;
    const height = block * ch;
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');
    for (let x = 0; x < cw; x++) {
        const map = colormap[x];
        for (let y = 0; y < ch; y++) {
            const i = map[y];
            const color = get_color_1.getColor(palette, i);
            context.fillStyle = color;
            context.fillRect(x * block, y * block, block, block);
        }
    }
    return canvas;
};

},{"./get-color":22}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColor = (palette, i) => {
    const p = i * 3;
    const r = palette[p];
    const g = palette[p + 1];
    const b = palette[p + 2];
    const color = `rgb( ${r}, ${g}, ${b} )`;
    return color;
};

},{}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_color_1 = require("./get-color");
exports.imageToCanvas = (image, palette, block = 4) => {
    const { width, height, data, transparent } = image;
    const canvas = document.createElement('canvas');
    const cw = block * width;
    const ch = block * height;
    canvas.width = cw;
    canvas.height = ch;
    const context = canvas.getContext('2d');
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const i = y * width + x;
            const c = data[i];
            if (c !== transparent) {
                const color = get_color_1.getColor(palette, c);
                context.fillStyle = color;
                context.fillRect(x * block, y * block, block, block);
            }
        }
    }
    return canvas;
};

},{"./get-color":22}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const read_wad_1 = require("../wad/read/read-wad");
const palette_to_canvas_1 = require("./palette-to-canvas");
const colormap_to_canvas_1 = require("./colormap-to-canvas");
const object_model_1 = require("../object-model");
const image_to_canvas_1 = require("./image-to-canvas");
const texture_to_canvas_1 = require("./texture-to-canvas");
const level_to_svg_1 = require("./level-to-svg");
const svg_events_1 = require("./svg-events");
const exclude = [
    'type', 'demos', 'dmxgus', 'dmxgusc', 'endoom', 'genmidi', 'music', 'sounds'
];
document.addEventListener('DOMContentLoaded', async () => {
    const filePicker = document.querySelector('input[type="file"]');
    const browser1El = document.querySelector('.browser-1');
    const browser2El = document.querySelector('.browser-2');
    const browser3El = document.querySelector('.browser-3');
    const previewEl = document.querySelector('.preview');
    const reader = new FileReader();
    filePicker.addEventListener('change', e => {
        browser1El.innerHTML = '';
        browser2El.innerHTML = '';
        browser3El.innerHTML = '';
        previewEl.innerHTML = '';
        const [file] = e.target['files'];
        reader.onload = e => {
            const buffer = e.target['result'];
            const wad = read_wad_1.readWad(new Uint8Array(buffer));
            const om = object_model_1.createObjectModel(wad);
            const names = Object.keys(om).filter(n => !exclude.includes(n)).filter(n => om[n]);
            names.forEach(name => {
                const browserSelectEl = document.createElement('div');
                browserSelectEl.classList.add('browser-select');
                browserSelectEl.classList.add('browser-select-1');
                browserSelectEl.innerText = name;
                browser1El.appendChild(browserSelectEl);
                browserSelectEl.addEventListener('click', () => {
                    const select1Els = document.querySelectorAll('.browser-select-1');
                    select1Els.forEach(el => el.classList.remove('selected'));
                    browserSelectEl.classList.add('selected');
                    previewEl.innerHTML = '';
                    browser2El.innerHTML = '';
                    browser3El.innerHTML = '';
                    if (name === 'playpal' && om.playpal) {
                        showPlayPal(om.playpal);
                        return;
                    }
                    if (name === 'colormap' && om.colormap && om.colormap.length && om.playpal) {
                        showColorMap(om.colormap, om.playpal[0]);
                        return;
                    }
                    if (name === 'flats' && om.flats) {
                        showImageBrowser(om, 'flats');
                        return;
                    }
                    if (name === 'patches' && om.patches) {
                        showImageBrowser(om, 'patches');
                        return;
                    }
                    if (name === 'sprites' && om.sprites) {
                        showImageBrowser(om, 'sprites');
                        return;
                    }
                    if (name === 'ui' && om.ui) {
                        showImageBrowser(om, 'ui');
                        return;
                    }
                    if (name === 'textures' && om.textures) {
                        showTextureBrowser(om);
                        return;
                    }
                    if (name === 'levels' && om.levels && om.levels.length) {
                        showLevelBrowser(om);
                        return;
                    }
                });
            });
        };
        reader.readAsArrayBuffer(file);
    });
    const showPlayPal = (palettes) => {
        palettes.forEach(palette => {
            const canvas = palette_to_canvas_1.paletteToCanvas(palette);
            previewEl.appendChild(canvas);
        });
    };
    const showColorMap = (colormap, palette) => {
        const canvas = colormap_to_canvas_1.colormapToCanvas(colormap, palette);
        canvas.classList.add('fit');
        previewEl.appendChild(canvas);
    };
    const showImageBrowser = (om, key) => {
        const names = Object.keys(om[key]);
        names.forEach(n => {
            const el = document.createElement('div');
            el.classList.add('browser-select');
            el.classList.add('browser-select-2');
            el.innerText = n;
            browser2El.append(el);
            el.addEventListener('click', () => {
                previewEl.innerHTML = '';
                const image = om[key][n];
                if (image) {
                    const canvas = image_to_canvas_1.imageToCanvas(image, om.playpal[0]);
                    previewEl.appendChild(canvas);
                }
                else {
                    console.error(`${n} not found!`);
                }
            });
        });
    };
    const showTextureBrowser = (om) => {
        const patchList = Object.values(om.patches);
        om.textures.forEach(texture => {
            const el = document.createElement('div');
            el.classList.add('browser-select');
            el.classList.add('browser-select-2');
            el.innerText = texture.name;
            browser2El.append(el);
            el.addEventListener('click', () => {
                previewEl.innerHTML = '';
                const canvas = texture_to_canvas_1.textureToCanvas(texture, patchList, om.playpal[0]);
                previewEl.appendChild(canvas);
            });
        });
    };
    const showLevelElement = {
        grid: true,
        blockmap: false,
        linedefs: true,
        nodes: false,
        reject: false,
        sectors: true,
        segs: false,
        sidedefs: true,
        ssectors: false,
        things: true,
        vertexes: true
    };
    const showLevelBrowser = (om) => {
        om.levels.forEach(level => {
            const el = document.createElement('div');
            el.classList.add('browser-select');
            el.classList.add('browser-select-2');
            el.innerText = level.name;
            browser2El.append(el);
            el.addEventListener('click', () => {
                const draw = () => {
                    browser3El.innerHTML = '';
                    previewEl.innerHTML = '';
                    const svg = level_to_svg_1.levelToSvg(om, level, showLevelElement);
                    Object.keys(showLevelElement).forEach(key => {
                        const div = document.createElement('div');
                        const label = document.createElement('label');
                        const text = document.createTextNode(` ${key}`);
                        const check = document.createElement('input');
                        check.type = 'checkbox';
                        check.checked = showLevelElement[key];
                        check.onchange = () => {
                            const { x, y, width, height } = svg.viewBox.baseVal;
                            showLevelElement[key] = !showLevelElement[key];
                            const newSvg = draw();
                            Object.assign(newSvg.viewBox.baseVal, { x, y, width, height });
                        };
                        label.appendChild(check);
                        label.appendChild(text);
                        div.appendChild(label);
                        browser3El.appendChild(div);
                    });
                    svg.classList.add('fit');
                    svg_events_1.zoomSvg(svg);
                    svg_events_1.panSvg(svg);
                    previewEl.appendChild(svg);
                    const resetZoomButton = document.createElement('button');
                    resetZoomButton.type = 'button';
                    resetZoomButton.appendChild(document.createTextNode('Reset Zoom'));
                    resetZoomButton.onclick = e => {
                        e.preventDefault();
                        const x = parseFloat(svg.dataset.minX) - 8;
                        const y = parseFloat(svg.dataset.minY) - 8;
                        const width = parseFloat(svg.dataset.width) + 16;
                        const height = parseFloat(svg.dataset.height) + 16;
                        Object.assign(svg.viewBox.baseVal, { x, y, width, height });
                    };
                    browser3El.appendChild(resetZoomButton);
                    return svg;
                };
                draw();
            });
        });
    };
});

},{"../object-model":20,"../wad/read/read-wad":34,"./colormap-to-canvas":21,"./image-to-canvas":23,"./level-to-svg":25,"./palette-to-canvas":26,"./svg-events":27,"./texture-to-canvas":28}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const data_1 = require("../data");
const image_to_canvas_1 = require("./image-to-canvas");
const invertY = ({ x, y }) => {
    y *= -1;
    return { x, y };
};
exports.levelToSvg = (om, level, settings) => {
    // doom y is inverted
    const vertexes = level.vertexes.map(invertY);
    let minX = Number.MAX_SAFE_INTEGER;
    let minY = Number.MAX_SAFE_INTEGER;
    let maxX = Number.MIN_SAFE_INTEGER;
    let maxY = Number.MIN_SAFE_INTEGER;
    vertexes.forEach(({ x, y }) => {
        if (x < minX)
            minX = x;
        if (x > maxX)
            maxX = x;
        if (y < minY)
            minY = y;
        if (y > maxY)
            maxY = y;
    });
    const width = maxX - minX;
    const height = maxY - minY;
    const div = document.createElement('div');
    const svgText = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${minX - 8} ${minY - 8} ${width + 16} ${height + 16}">
      ${settings.grid ? grid : ''}
      ${settings.vertexes ? vertexesToSvg(vertexes) : ''}
      ${settings.linedefs ? linedefsToSvg(level.linedefs, vertexes) : ''}
      ${settings.sidedefs ? sidedefsToSvg(level.linedefs, level.sidedefs, vertexes) : ''}
      ${settings.things ? thingsToSvg(level.things) : ''}
      ${settings.sectors ? sectorsToSvg(level) : ''}
    </svg>
  `;
    div.innerHTML = svgText;
    const svg = div.firstElementChild;
    Object.assign(svg.dataset, { minX, minY, maxX, maxY, width, height });
    decorateThings(om, svg);
    return svg;
};
const grid = `
  <defs>
    <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
      <path d="M 8 0 L 0 0 0 8" fill="none" stroke="gray" stroke-width="0.5"/>
    </pattern>
    <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
      <rect width="64" height="64" fill="url(#smallGrid)"/>
      <path d="M 64 0 L 0 0 0 64" fill="none" stroke="gray" stroke-width="1"/>
    </pattern>
  </defs>

  <rect x="-32768" y ="-32768" width="65535" height="65535" fill="url(#grid)" />
`;
const vertexesToSvg = (vertexes) => vertexes.map(({ x, y }) => `<circle class="vertex" cx="${x}" cy="${y}" r="${2}"></circle>`).join('');
const linedefsToSvg = (linedefs, vertexes) => linedefs.map(linedef => {
    const { startVertex, endVertex } = linedef;
    const start = vertexes[startVertex];
    const end = vertexes[endVertex];
    return `<line class="linedef" x1="${start.x}" y1="${start.y}" x2="${end.x}" y2="${end.y}" stroke="black"></line>`;
}).join('');
const thingsToSvg = (things) => things.map(thing => {
    const { type } = thing;
    const { x, y } = invertY(thing);
    return `<circle class="thing" data-type="${type}" cx="${x}" cy="${y}" r="${32}" fill="rgba( 127, 127, 127, 0.5 )"></circle>`;
}).join('');
const sidedefsToSvg = (linedefs, sidedefs, vertexes) => {
    const length = 8;
    let svg = '';
    linedefs.forEach(linedef => {
        const start = vertexes[linedef.startVertex];
        const end = vertexes[linedef.endVertex];
        const left = sidedefs[linedef.leftSidedef];
        const right = sidedefs[linedef.rightSidedef];
        const mid = util_1.midPoint(start, end);
        const r = util_1.rads(start, end);
        if (left) {
            const newR = r + Math.PI / 2;
            const newEnd = util_1.lineEnd(mid, newR, length);
            svg += `<line class="sidedef left" x1="${mid.x}" y1="${mid.y}" x2="${newEnd.x}" y2="${newEnd.y}" stroke="red"></line>`;
        }
        if (right) {
            const newR = r - Math.PI / 2;
            const newEnd = util_1.lineEnd(mid, newR, length);
            svg += `<line class="sidedef right" x1="${mid.x}" y1="${mid.y}" x2="${newEnd.x}" y2="${newEnd.y}" stroke="blue"></line>`;
        }
    });
    return svg;
};
const sectorsToSvg = (level) => {
    const { linedefs, sidedefs, sectors } = level;
    const vertexes = level.vertexes.map(invertY);
    const hueStep = 360 / (sectors.length + 1);
    let svg = '';
    sectors.forEach((_sector, s) => {
        const hue = s * hueStep;
        linedefs.forEach(linedef => {
            const left = sidedefs[linedef.leftSidedef];
            const right = sidedefs[linedef.rightSidedef];
            if ((left && left.sector === s) || (right && right.sector === s)) {
                const { startVertex, endVertex } = linedef;
                const start = vertexes[startVertex];
                const end = vertexes[endVertex];
                svg += `<line class="sector" x1="${start.x}" y1="${start.y}" x2="${end.x}" y2="${end.y}" stroke="hsla(${hue},100%,50%,0.5)"></line>`;
            }
        });
    });
    return svg;
};
const decorateThings = (om, svg) => {
    const things = svg.querySelectorAll('.thing');
    things.forEach(thing => {
        const type = parseInt(thing.dataset.type);
        const data = data_1.thingData.find(t => t.type === type);
        if (!data)
            return;
        if (data.spritePrefix === '')
            return;
        let spriteName = data.spritePrefix + 'A0';
        if (!(spriteName in om.sprites))
            spriteName = data.spritePrefix + 'A1';
        if (!(spriteName in om.sprites))
            return;
        const cx = parseFloat(thing.getAttribute('cx'));
        const cy = parseFloat(thing.getAttribute('cy'));
        const sprite = om.sprites[spriteName];
        const x = cx - sprite.left;
        const y = cy - sprite.top;
        const canvas = image_to_canvas_1.imageToCanvas(sprite, om.playpal[0], 1);
        const url = canvas.toDataURL();
        /*
        const flippedCanvas = document.createElement( 'canvas' )
        const context = flippedCanvas.getContext( '2d' )!
    
        flippedCanvas.width = canvas.width
        flippedCanvas.height = canvas.height
    
        context.translate( 0, canvas.height )
        context.scale( 1, -1 )
        context.drawImage( canvas, 0, 0 )
    
        const url = flippedCanvas.toDataURL()
        */
        const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
        image.classList.add('thing');
        image.dataset.type = String(type);
        image.setAttribute('width', `${sprite.width}`);
        image.setAttribute('height', `${sprite.height}`);
        image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', url);
        image.setAttribute('x', `${x}`);
        image.setAttribute('y', `${y}`);
        thing.after(image);
        thing.remove();
    });
};

},{"../data":1,"./image-to-canvas":23,"./util":29}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_color_1 = require("./get-color");
exports.paletteToCanvas = (palette, block = 16) => {
    const canvas = document.createElement('canvas');
    const size = block * 16;
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext('2d');
    for (let y = 0; y < 16; y++) {
        for (let x = 0; x < 16; x++) {
            const i = y * 16 + x;
            const color = get_color_1.getColor(palette, i);
            context.fillStyle = color;
            context.fillRect(x * block, y * block, block, block);
        }
    }
    return canvas;
};

},{"./get-color":22}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zoomSvg = (svg) => svg.onwheel = e => {
    const { width: clientWidth, height: clientHeight } = svg.getBoundingClientRect();
    let { x, y, width, height } = svg.viewBox.baseVal;
    let { layerX, layerY, deltaY } = e;
    // need to transform layerX, layerY to map coords
    const scaleX = width / clientWidth;
    const scaleY = height / clientHeight;
    layerX *= scaleX;
    layerY *= scaleY;
    layerX += x;
    layerY += y;
    // should use deltaMode but for now...
    deltaY = deltaY < 0 ? -1 : deltaY > 0 ? 1 : 0;
    const amount = 1 + (deltaY / 40);
    x -= layerX;
    y -= layerY;
    x *= amount;
    y *= amount;
    width *= amount;
    height *= amount;
    x += layerX;
    y += layerY;
    console.log(e);
    console.log({ x, y, width, height, deltaY });
    Object.assign(svg.viewBox.baseVal, { x, y, width, height });
};
exports.panSvg = (svg) => {
    let lastPosition = { x: 0, y: 0 };
    let isDown;
    const pointFromEvent = e => {
        let x = 0;
        let y = 0;
        if (e['targetTouches']) {
            x = e.targetTouches[0].layerX;
            y = e.targetTouches[0].layerY;
        }
        else {
            x = e.layerX;
            y = e.layerY;
        }
        return { x, y };
    };
    const onDown = e => {
        lastPosition = pointFromEvent(e);
        isDown = true;
    };
    const onUp = () => {
        isDown = false;
    };
    const onMove = e => {
        if (!isDown)
            return;
        e.preventDefault();
        const { width } = svg.viewBox.baseVal;
        const { width: clientWidth } = svg.getBoundingClientRect();
        const ratio = width / clientWidth;
        const position = pointFromEvent(e);
        svg.viewBox.baseVal.x -= (position.x - lastPosition.x) * ratio;
        svg.viewBox.baseVal.y -= (position.y - lastPosition.y) * ratio;
        lastPosition = position;
    };
    if ('PointerEvent' in window) {
        svg.onpointerdown = onDown;
        svg.onpointerup = onUp;
        svg.onpointermove = onMove;
    }
    else {
        svg.onmousedown = onDown;
        svg.onmouseup = onUp;
        svg.onmousemove = onMove;
        svg.ontouchstart = onDown;
        svg.ontouchend = onUp;
        svg.ontouchmove = onMove;
    }
};

},{}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const image_to_canvas_1 = require("./image-to-canvas");
exports.textureToCanvas = (texture, pictures, palette, block = 4) => {
    const { width, height, patches } = texture;
    const canvas = document.createElement('canvas');
    const cw = block * width;
    const ch = block * height;
    canvas.width = cw;
    canvas.height = ch;
    const context = canvas.getContext('2d');
    patches.forEach(p => {
        const { patch, x, y } = p;
        const picture = pictures[patch];
        const patchCanvas = image_to_canvas_1.imageToCanvas(picture, palette, block);
        context.drawImage(patchCanvas, x * block, y * block);
    });
    return canvas;
};

},{"./image-to-canvas":23}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vertexEquals = (a, b) => a.x === b.x && a.y === b.y;
exports.midPoint = (start, end) => {
    const minX = Math.min(start.x, end.x);
    const maxX = Math.max(start.x, end.x);
    const minY = Math.min(start.y, end.y);
    const maxY = Math.max(start.y, end.y);
    const x = (maxX - minX) / 2 + minX;
    const y = (maxY - minY) / 2 + minY;
    return { x, y };
};
exports.rads = (start, end) => Math.atan2(end.y - start.y, end.x - start.x);
exports.lineEnd = (start, rads, length) => {
    const { x: sx, y: sy } = start;
    const x = sx + Math.cos(rads) * length;
    const y = sy + Math.sin(rads) * length;
    return { x, y };
};

},{}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readUint8 = (view, offset) => view.getUint8(offset);
exports.readInt16 = (view, offset) => view.getInt16(offset, true);
exports.readUint16 = (view, offset) => view.getUint16(offset, true);
exports.readInt32 = (view, offset) => view.getInt32(offset, true);
exports.writeInt16 = (view, offset, value) => view.setInt16(offset, value, true);
exports.writeUint16 = (view, offset, value) => view.setUint16(offset, value, true);
exports.writeInt32 = (view, offset, value) => view.setInt32(offset, value, true);
exports.readAscii = (view, offset, length) => {
    let result = '';
    for (let i = offset; i < length; i++) {
        result += String.fromCharCode(view.getUint8(i));
    }
    return result.replace(/\0/g, '');
};
exports.writeAscii = (view, offset, value) => {
    for (let i = 0; i < value.length; i++) {
        view.setUint8(offset + i, value.charCodeAt(i));
    }
};
exports.ensureStringLength = (str, len) => {
    if (str.length > len) {
        str = str.substr(0, len);
    }
    while (str.length < len) {
        str += '\0';
    }
    return str;
};
exports.lumpNameRegex = /[0-9A-Z\[\]_\-\\]+/;

},{}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const read_wad_header_1 = require("./read-wad-header");
const readLumpInfo = (wadView, lumpOffset, id) => {
    const offset = utils_1.readInt32(wadView, lumpOffset);
    const length = utils_1.readInt32(wadView, lumpOffset + 4);
    const name = utils_1.readAscii(wadView, lumpOffset + 8, lumpOffset + 16);
    return {
        id,
        name,
        offset,
        length
    };
};
exports.readLumpInfoTable = (data, header) => {
    header = header || read_wad_header_1.readWadHeader(data);
    const wadView = new DataView(data.buffer);
    const infoTable = [];
    for (let i = 0; i < header.numberOfLumps; i++) {
        const offset = 16 * i + header.infoTableOffset;
        infoTable.push(readLumpInfo(wadView, offset, i));
    }
    return infoTable;
};

},{"../../utils":30,"./read-wad-header":33}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readLump = (wadData, info) => {
    const { name, offset, length } = info;
    const data = new Uint8Array(wadData.slice(offset, offset + length));
    return { name, data };
};

},{}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
exports.readWadHeader = (data) => {
    const wadView = new DataView(data.buffer);
    const type = utils_1.readAscii(wadView, 0, 4);
    const numberOfLumps = utils_1.readInt32(wadView, 4);
    const infoTableOffset = utils_1.readInt32(wadView, 8);
    return {
        type,
        numberOfLumps,
        infoTableOffset
    };
};

},{"../../utils":30}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const read_wad_header_1 = require("./read-wad-header");
const read_lump_info_1 = require("./read-lump-info");
const read_lump_1 = require("./read-lump");
exports.readWad = (data) => {
    const header = read_wad_header_1.readWadHeader(data);
    const infoTable = read_lump_info_1.readLumpInfoTable(data, header);
    const lumps = infoTable.map(lumpInfo => read_lump_1.readLump(data, lumpInfo));
    const { type } = header;
    return { type, lumps };
};

},{"./read-lump":32,"./read-lump-info":31,"./read-wad-header":33}]},{},[24]);
