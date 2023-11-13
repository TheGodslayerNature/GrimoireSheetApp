import { CharacterClass } from "./CharacterClass2";
import { Status, UserAttributes } from "../userAttributes/UserAttributes";
import { Arcanas } from "./Arcanas";
import { Persona } from "model/persona/Persona";
import { Item } from "model/item/Item";

export class Character {
  user: UserAttributes;
  arcanas: Arcanas;
  klass: CharacterClass;
  aspectPoints: number = 0;
  energy: number;
  damageReduction: number;
  persona: Persona[] = [];
  lifePoints: number;
  currentLife: number = 0;
  currentEnergy: number = 0;
  currentAspectPoint: number = 0;
  inventory:Item[] = [];

  constructor(user: UserAttributes, arcanas: Arcanas, klass: CharacterClass) {
    this.user = user;
    this.arcanas = arcanas;
    this.klass = klass;
    this.aspectPoints;
    this.energy = this.energyCalculate();
    this.lifePoints = this.calculateLifePoints();
    this.damageReduction = 1;
  }

  toString(): string {
    var result = `name: ${this.user.getName()}, level: ${this.user.getLevel()}, Arcana: ${this.arcanas.arcanaName.toLocaleUpperCase()}, classe: ${this.klass.toString()}, aspectPoints: ${
      this.aspectPoints
    }, energy: ${this.energy}, damageReduction: ${this.damageReduction}`;

    return result;
  }

  energyCalculate(): number {
    return Math.floor(
      this.user.getStatusPointsFor(Status.VIT) + this.user.getLevel() / 2
    );
  }

  getEnergy() {
    return this.energyCalculate();
  }

  setEnergy(energy: number) {
    this.energy = energy;
  }

  calculateLifePoints(): number {
    var vitPvCalculate =
      (5 + this.user.getStatusPointsFor(Status.VIT)) * this.user.getLevel();
    var pv = Math.floor(25 + vitPvCalculate);
    return pv;
  }

  setLifePoints(lifePoints: number) {
    this.lifePoints = lifePoints;
  }

  setCurrentLifePoints(currentLife: number) {
    this.currentLife = currentLife;
  }

  setCurrentEnergy(currentEnergy: number) {
    this.currentEnergy = currentEnergy;
  }

  setAspectPoints(aspectPoints: number) {
    this.aspectPoints = aspectPoints;
  }
  setCurrentAspectPoint(currentAspectPoint: number) {
    this.currentAspectPoint = currentAspectPoint;
  }

  setPersona(persona: Persona) {
    this.persona.push(persona);
  }

  getPersona() {
    return this.persona;
  }
}

export enum Arcana {
  JOKER,
  MAGE,
  PRIESTESS,
  EMPRRESS,
  EMPEROR,
  HIEROPHANT,
  LOVERS,
  CHARIOT,
  JUSTICE,
  HERMIT,
  FORTUNE,
  STRENGTH,
  HANGED,
  DEATH,
  TEMPERANCE,
  DEVIL,
  TOWER,
  STAR,
  MOON,
  SUN,
  JUDGMENT,
  WORLD,
}
