import { List } from "immutable";

export const WARRIOR = 1;
export const PALADIN = 2;
export const HUNTER = 3;
export const ROGUE = 4;
export const PRIEST = 5;
export const DEATH_KNIGHT = 6;
export const SHAMAN = 7;
export const MAGE = 8;
export const WARLOCK = 9;
export const MONK = 10;
export const DRUID = 11;
export const DEMON_HUNTER = 12;

export type HeroClassType =
  | typeof WARRIOR
  | typeof PALADIN
  | typeof HUNTER
  | typeof ROGUE
  | typeof PRIEST
  | typeof DEATH_KNIGHT
  | typeof SHAMAN
  | typeof MAGE
  | typeof WARLOCK
  | typeof MONK
  | typeof DRUID
  | typeof DEMON_HUNTER;

// From the Blizzard API at playable-class/index
export const HeroClasses = List([
  { id: WARRIOR, name: "Warrior" },
  { id: PALADIN, name: "Paladin" },
  { id: HUNTER, name: "Hunter" },
  { id: ROGUE, name: "Rogue" },
  { id: PRIEST, name: "Priest" },
  { id: DEATH_KNIGHT, name: "Death Knight" },
  { id: SHAMAN, name: "Shaman" },
  { id: MAGE, name: "Mage" },
  { id: WARLOCK, name: "Warlock" },
  { id: MONK, name: "Monk" },
  { id: DRUID, name: "Druid" },
  { id: DEMON_HUNTER, name: "Demon Hunter" },
]);

export interface IHeroClass {
  name: string;
  type: HeroClassType;
  shout(name: string): any;
}

export const getHeroClass = (heroClassType: HeroClassType) => {
  switch (heroClassType) {
    case HUNTER:
      return new Hunter();
    case WARLOCK:
      return new Warlock();
    case WARRIOR:
      return new Warrior();
  }
};

const getHeroClassName = (index) => {
  return HeroClasses.find((i) => i.id === index).name;
};

// These will probably each move into their own files.
export class Hunter implements IHeroClass {
  type: HeroClassType;
  pet: string;

  constructor() {
    this.type = HUNTER;
    this.pet = "falcon";
  }

  get name(): string {
    return getHeroClassName(this.type);
  }

  shout = (name: string) => {
    console.log(`I, ${name}, hunt things!`);
  };
}

export class Warlock implements IHeroClass {
  type: HeroClassType;

  constructor() {
    this.type = WARLOCK;
  }

  get name(): string {
    return getHeroClassName(this.type);
  }

  shout = (name: string) => {
    console.log(`I, ${name}, summon demons!`);
  };
}

export class Warrior implements IHeroClass {
  type: HeroClassType;

  constructor() {
    this.type = WARRIOR;
  }

  get name(): string {
    return getHeroClassName(this.type);
  }

  shout = (name: string) => {
    console.log(`I, ${name}, bash things real hard!`);
  };
}
