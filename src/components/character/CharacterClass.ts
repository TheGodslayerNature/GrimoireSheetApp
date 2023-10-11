import { Skill } from "./Skills";
import classSkills from "./util/skills.json" 

export abstract class CharacterClass {
  skills: Skill[];

  constructor(skills: Skill[]) {
    this.skills = skills;
  }

  static cartaCoringa() {
    return new CartaCoringa();
  }
  static emergente() {
    return new Emergente();
  }

  static sombra() {
    return new Sombra();
  }
  static supressor() {
    return new Supressor();
  }
  static tocha() {
    return new Tocha();
  }

  public abstract name(): string; 
}

export class Emergente extends CharacterClass {
  constructor() {
    super(classSkills.Emergente.skills as Skill[]);
  }

  name = () => 'Emergente';
}

export class Sombra extends CharacterClass {
  constructor() {
    super(classSkills.Sombra.skills as Skill[]);
  }

  name = () => 'Sombra';
}
export class CartaCoringa extends CharacterClass {
  constructor() {
    super(classSkills.CartaCoringa.skills as Skill[]);
  }

  name = () => 'Carta-Coringa';
}

export class Supressor extends CharacterClass {
  constructor() {
    super(classSkills.Supressor.skills as Skill[]);
  }

  name = () => 'Supressor';
}
export class Tocha extends CharacterClass {
  constructor() {
    super(classSkills.Tocha.skills as Skill[]);
  }

  name = () => 'Tocha';
}
