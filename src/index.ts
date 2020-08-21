import {
  PlayableClassType,
  IPlayableClass,
  Hunter,
  Warlock,
  Warrior,
} from "./playableClasses";

import { verbose, OPEN_READWRITE, Database } from "sqlite3";

verbose();
let db = new Database("wow-ts.sqlite3", OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }

  console.log("we connected!");
});

db.serialize(() => {
  db.each(`SELECT * FROM characters`, (err, row) => {
    console.log(row);
    let char = new Character(row.name, row.playableClass);
    console.log(char);
    char.shout();
  });
});

interface Player {}

class Character {
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

// const catradora: Character = new Character("Catradora", "hunter");
// const thee: Character = new Character("Thee", "warlock");

// // console.log(catradora);
// catradora.shout();

// // console.log(thee);
// thee.shout();

db.close((err) => {
  if (err) {
    console.error(err.message);
  }

  console.log("Connection closed");
});
