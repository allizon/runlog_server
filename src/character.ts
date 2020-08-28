// import { db, dbClose } from "./database";
import { HeroClassType, IHeroClass, getHeroClass } from "./heroClasses";
import { HeroRaceType, IRace } from "./heroRaces";

export default class Character {
  id: number;
  name: string;
  heroClass: IHeroClass;
  race?: IRace;
  level?: number;

  constructor(name: string, heroClassType: HeroClassType) {
    this.id = 1;
    this.name = name;
    this.heroClass = getHeroClass(heroClassType);
  }

  shout = () => {
    this.heroClass.shout(this.name);
  };
}

// Maybe move this stuff to some sort of "CharacterQuery" module or something
interface CharacterRecord {
  id: number;
  name: string;
  heroClass: HeroClassType;
  race: string;
}

const listRows = (_: object, rows: Array<CharacterRecord>) => {
  console.log(rows);
};

const doShout = (_: object, rows: Array<CharacterRecord>) => {
  rows.forEach((row) => {
    const char = new Character(row.name, row.heroClass);
    char.shout();
  });
};

const mapToAllCharacters = (func) => {
  // db.all(`SELECT * FROM characters`, func);
};

// THis is 100% async. Good to know.
// So maybe this requires a different way of thinking - I don't go get a bunch
// of results from the database, return them and do something else; we're just
// going to provide a function to run against all of the results it finds.
export const listCharacters = () => {
  mapToAllCharacters(listRows);
  mapToAllCharacters(doShout);
  // dbClose();
};
