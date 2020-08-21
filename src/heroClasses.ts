import { List } from "immutable";

export type HeroClassType = "hunter" | "mage" | "warlock" | "warrior";

// From the Blizzard API at playable-class/index
export const HeroClasses = List([
  { id: 1, name: "Warrior" },
  { id: 2, name: "Paladin" },
  { id: 3, name: "Hunter" },
  { id: 4, name: "Rogue" },
  { id: 5, name: "Priest" },
  { id: 6, name: "Death Knight" },
  { id: 7, name: "Shaman" },
  { id: 8, name: "Mage" },
  { id: 9, name: "Warlock" },
  { id: 10, name: "Monk" },
  { id: 11, name: "Druid" },
  { id: 12, name: "Demon Hunter" },
]);

export interface IHeroClass {
  name: string;
  type: HeroClassType;
  shout(name: string): any;
}

export const getHeroClass = (heroClassType: HeroClassType) => {
  switch (heroClassType) {
    case "hunter":
      return new Hunter();
    case "warlock":
      return new Warlock();
    case "warrior":
      return new Warrior();
  }
};

export class Hunter implements IHeroClass {
  name: string;
  type: HeroClassType;
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

export class Warlock implements IHeroClass {
  name: string;
  type: HeroClassType;

  constructor() {
    this.name = "Warlock";
    this.type = "warlock";
  }

  shout = (name: string) => {
    console.log(`I, ${name}, summon demons!`);
  };
}

export class Warrior implements IHeroClass {
  name: string;
  type: HeroClassType;

  constructor() {
    this.name = "Warrior";
    this.type = "warrior";
  }

  shout = (name: string) => {
    console.log(`I, ${name}, bash things real hard!`);
  };
}
