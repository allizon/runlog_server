import { List } from "immutable";

export type RaceType = "human" | "orc" | "dwarf" | "vulpera" | "tauren";

// From the Blizzard API at playable-race/index
export const HeroRaces = List([
  { id: 1, name: "Human" },
  { id: 2, name: "Orc" },
  { id: 3, name: "Dwarf" },
  { id: 4, name: "Night Elf" },
  { id: 5, name: "Undead" },
  { id: 6, name: "Tauren" },
  { id: 7, name: "Gnome" },
  { id: 8, name: "Troll" },
  { id: 9, name: "Goblin" },
  { id: 10, name: "Blood Elf" },
  { id: 11, name: "Draenei" },
  { id: 22, name: "Worgen" },
  { id: 24, name: "Pandaren (Neutral)" },
  { id: 25, name: "Pandaren (Alliance)" },
  { id: 26, name: "Pandaren (Horde)" },
  { id: 27, name: "Nightborne" },
  { id: 28, name: "Highmountain Tauren" },
  { id: 29, name: "Void Elf" },
  { id: 30, name: "Lightforged Draenei" },
  { id: 31, name: "Zandalari Troll" },
  { id: 32, name: "Kul Tiran" },
  { id: 34, name: "Dark Iron Dwarf" },
  { id: 35, name: "Vulpera" },
  { id: 36, name: "Mag'har Orc" },
  { id: 37, name: "Mechagnome" },
]);

export interface IRace {
  name: string;
  type: RaceType;
}
