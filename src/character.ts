import { db, dbClose } from "./database";
import {
  PlayableClassType,
  IPlayableClass,
  Hunter,
  Warlock,
  Warrior,
} from "./playableClasses";

export default class Character {
  id: number;
  name: string;
  playableClass: IPlayableClass;
  level?: number;

  constructor(name: string, playableClassType: PlayableClassType) {
    this.id = 1;
    this.name = name;
    this._assignPlayableClass(playableClassType);
  }

  shout = () => {
    this.playableClass.shout(this.name);
  };

  _assignPlayableClass = (playableClassType: PlayableClassType) => {
    switch (playableClassType) {
      case "hunter":
        this.playableClass = new Hunter();
        break;
      case "warlock":
        this.playableClass = new Warlock();
        break;
      case "warrior":
        this.playableClass = new Warrior();
        break;
    }
  };
}

export const listCharacters = () => {
  db.serialize(() => {
    db.each(`SELECT * FROM characters`, (err, row) => {
      console.log(row);
      let char = new Character(row.name, row.playableClass);
      char.shout();
    });
  });

  dbClose();
};
