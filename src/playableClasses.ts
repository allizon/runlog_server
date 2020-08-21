export const HUNTER: unique symbol = Symbol("hunter");
export const WARRIOR: unique symbol = Symbol("warrior");
export const MAGE: unique symbol = Symbol("mage");
export const WARLOCK: unique symbol = Symbol("warlock");

export type PlayableClassType =
  | typeof HUNTER
  | typeof WARRIOR
  | typeof MAGE
  | typeof WARLOCK;

export interface IPlayableClass {
  name: string;
  type: PlayableClassType;
  shout(name: string): any;
}

export class Hunter implements IPlayableClass {
  name: string;
  type: PlayableClassType;
  pet: string;

  constructor() {
    this.name = "Hunter";
    this.type = HUNTER;
    this.pet = "falcon";
  }

  shout = (name: string) => {
    console.log(`I, ${name}, hunt things!`);
  };
}

export class Warlock implements IPlayableClass {
  name: string;
  type: PlayableClassType;

  constructor() {
    this.name = "Warlock";
    this.type = WARLOCK;
  }

  shout = (name: string) => {
    console.log(`I, ${name}, summon demons!`);
  };
}
