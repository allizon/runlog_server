import {
  PlayableClassType,
  IPlayableClass,
  Hunter,
  Warlock,
  HUNTER,
  WARRIOR,
  MAGE,
  WARLOCK,
} from "./playableClasses";

interface Player {}

class Character {
  id: number;
  name: string;
  playableClass?: IPlayableClass;
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
      case HUNTER:
        this.playableClass = new Hunter();
        break;
      case WARLOCK:
        this.playableClass = new Warlock();
        break;
    }
  };
}

const catradora: Character = new Character("Catradora", HUNTER);
const thee: Character = new Character("Thee", WARLOCK);

// console.log(catradora);
catradora.shout();

// console.log(thee);
thee.shout();
