import { Player } from "components/player/Player";
import { CharacterClass } from "./CharacterClass2";
import { Status, UserStatus } from "../user/UserStatus";
import { Arcanas } from "./Arcanas";
import { Persona } from "components/persona/Persona";

export class Character{
    
    user:UserStatus;
    player:Player;
    arcanas:Arcanas;
    klass:CharacterClass;
    aspectPoints:number;
    energy:number;
    damageReduction:number;
    persona:Persona[] = [];

    constructor(user:UserStatus, player:Player, arcanas:Arcanas,klass:CharacterClass,) 
        {
            this.user = user;
            this.player = player;
            this.arcanas = arcanas;
            this.klass = klass;
            this.aspectPoints = 4;
            this.energy=  this.energyCalculate();
            this.damageReduction = 1;
    }

    toString(): string{
        var result =`name: ${this.user.getName()}, level: ${this.user.getLevel()}, player: {${this.player.toString()}}, Arcana: ${this.arcanas.arcanaName.toLocaleUpperCase()}, classe: ${this.klass.toString()}, aspectPoints: ${this.aspectPoints}, energy: ${this.energy}, damageReduction: ${this.damageReduction}`;

        return result;
    }

    energyCalculate(): number{
        return Math.floor(this.user.getStatusPointsFor(Status.VIT) + (this.user.getLevel() / 2))
    }

    getEnergy() {
        return this.energyCalculate();
    }

    lifePoints(): number {
        var vitPvCalculate = (5 + this.user.getStatusPointsFor(Status.VIT)) * this.user.getLevel();
        var pv = Math.floor(25 + vitPvCalculate);
        return pv;
    }

    setPersona(persona:Persona) {
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
    WORLD
}