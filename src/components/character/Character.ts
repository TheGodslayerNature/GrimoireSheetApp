import { Player } from "components/player/Player";
import { CharacterClass } from "./CharacterClass";
import { Status, User } from "../user/User";

export class Character{
    
    user:User;
    player:Player;
    arcana:Arcana;
    klass:CharacterClass;
    aspectPoints:number;
    energy:number;
    damageReduction:number;

    constructor(user:User, player:Player, arcana:Arcana,klass:CharacterClass,) 
        {
            this.user = user;
            this.player = player;
            this.arcana = arcana;
            this.klass = klass;
            this.aspectPoints = 4;
            this.energy=  this.energyCalculate();
            this.damageReduction = 1;
    }

    toString(): string{
        var result =`name: ${this.user.getName()}, level: ${this.user.getLevel()}, player: {${this.player.toString()}}, Arcana: ${Arcana[this.arcana]}, classe: ${this.klass.toString()}, aspectPoints: ${this.aspectPoints}, energy: ${this.energy}, damageReduction: ${this.damageReduction}`;

        return result;
    }

    energyCalculate(): number{
        return Math.floor(this.user.getStatusPointsFor(Status.VIT) + (this.user.getLevel() / 2))
    }

    lifePoints(): number {
        var pv = Math.floor(25 + ((5 + this.user.getStatusPointsFor(Status.VIT)) * this.user.getLevel()) );
        return pv;
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