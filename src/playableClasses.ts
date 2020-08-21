export type PlayableClassType = "hunter" | "mage" | "warlock" | "warrior";

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
    this.type = "hunter";
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
    this.type = "warlock";
  }

  shout = (name: string) => {
    console.log(`I, ${name}, summon demons!`);
  };
}

export class Warrior implements IPlayableClass {
  name: string;
  type: PlayableClassType;

  constructor() {
    this.name = "Warrior";
    this.type = "warrior";
  }

  shout = (name: string) => {
    console.log(`I, ${name}, bash things real hard!`);
  };
}
