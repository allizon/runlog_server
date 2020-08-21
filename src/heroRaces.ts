import { List } from "immutable";

export const HUMAN = 1;
export const ORC = 2;
export const DWARF = 3;
export const NIGHT_ELF = 4;
export const UNDEAD = 5;
export const TAUREN = 6;
export const GNOME = 7;
export const TROLL = 8;
export const GOBLIN = 9;
export const BLOOD_ELF = 10;
export const DRAENEI = 11;
export const WORGEN = 22;
export const PANDAREN_N = 24;
export const PANDAREN_A = 25;
export const PANDAREN_H = 26;
export const NIGHTBORNE = 27;
export const HIGHMOUNTAIN_TAUREN = 28;
export const VOID_ELF = 29;
export const LIGHTFORGED_DRAENEI = 30;
export const ZANDALARI_TROLL = 31;
export const KUL_TIRAN = 32;
export const DARK_IRON_DWARF = 34;
export const VULPERA = 35;
export const MAGHAR_ORC = 36;
export const MECHAGNOME = 37;

export type HeroRaceType =
  | typeof HUMAN
  | typeof ORC
  | typeof DWARF
  | typeof NIGHT_ELF
  | typeof UNDEAD
  | typeof TAUREN
  | typeof GNOME
  | typeof TROLL
  | typeof GOBLIN
  | typeof BLOOD_ELF
  | typeof DRAENEI
  | typeof WORGEN
  | typeof PANDAREN_N
  | typeof PANDAREN_A
  | typeof PANDAREN_H
  | typeof NIGHTBORNE
  | typeof HIGHMOUNTAIN_TAUREN
  | typeof VOID_ELF
  | typeof LIGHTFORGED_DRAENEI
  | typeof ZANDALARI_TROLL
  | typeof KUL_TIRAN
  | typeof DARK_IRON_DWARF
  | typeof VULPERA
  | typeof MAGHAR_ORC
  | typeof MECHAGNOME;

// From the Blizzard API at playable-race/index
export const HeroRaces = List([
  { id: HUMAN, name: "Human" },
  { id: ORC, name: "Orc" },
  { id: DWARF, name: "Dwarf" },
  { id: NIGHT_ELF, name: "Night Elf" },
  { id: UNDEAD, name: "Undead" },
  { id: TAUREN, name: "Tauren" },
  { id: GNOME, name: "Gnome" },
  { id: TROLL, name: "Troll" },
  { id: GOBLIN, name: "Goblin" },
  { id: BLOOD_ELF, name: "Blood Elf" },
  { id: DRAENEI, name: "Draenei" },
  { id: WORGEN, name: "Worgen" },
  { id: PANDAREN_N, name: "Pandaren (Neutral)" },
  { id: PANDAREN_A, name: "Pandaren (Alliance)" },
  { id: PANDAREN_H, name: "Pandaren (Horde)" },
  { id: NIGHTBORNE, name: "Nightborne" },
  { id: HIGHMOUNTAIN_TAUREN, name: "Highmountain Tauren" },
  { id: VOID_ELF, name: "Void Elf" },
  { id: LIGHTFORGED_DRAENEI, name: "Lightforged Draenei" },
  { id: ZANDALARI_TROLL, name: "Zandalari Troll" },
  { id: KUL_TIRAN, name: "Kul Tiran" },
  { id: DARK_IRON_DWARF, name: "Dark Iron Dwarf" },
  { id: VULPERA, name: "Vulpera" },
  { id: MAGHAR_ORC, name: "Mag'har Orc" },
  { id: MECHAGNOME, name: "Mechagnome" },
]);

export interface IRace {
  name: string;
  type: HeroRaceType;
}
