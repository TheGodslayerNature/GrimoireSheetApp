import { Skill } from "./Skills";
import classSkills from "./util/skills.json";

export class CharacterClass {
  name: string;
  skills: Skill[];

  private constructor(name: string, skills: Skill[]) {
    this.name = name;
    this.skills = skills;
  }

  static cartaCoringa = () =>
    new CharacterClass("Carta-Coringa", classSkills.CartaCoringa.skills as Skill[]);

  static emergente = () =>
    new CharacterClass("Emergente", classSkills.Emergente.skills);

  static sombra = () => 
    new CharacterClass("Sombra", classSkills.Sombra.skills);

  static supressor = () =>
    new CharacterClass("Supressor", classSkills.Supressor.skills);

  static tocha = () => 
    new CharacterClass("Tocha", classSkills.Tocha.skills);

//   public name = () => this._name;
//   public skills = () => this._skills;
}
