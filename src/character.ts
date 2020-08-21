import { db, dbClose } from "./database";
import { HeroClassType, IHeroClass, getHeroClass } from "./heroClasses";
import { RaceType, IRace } from "./races";

// CharacterFactory
//    * create base character
//    * extend w/class
//    * extend w/race

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

export const listCharacters = () => {
  db.serialize(() => {
    db.each(`SELECT * FROM characters`, (err, row) => {
      console.log("-----");
      console.log(row);
      let char = new Character(row.name, row.heroClass);
      char.shout();
    });
  });

  dbClose();
};
