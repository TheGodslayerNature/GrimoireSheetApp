import { Player } from "components/player/Player";
import { CharacterClass } from "./CharacterClass";

export class Character{
    characterName:String;
    level:number;
    player:Player;
    arcana:Arcana;
    klass:CharacterClass;
    aspectPoints:number;
    energy:number;
    damageReduction:number;

    constructor(
        characterName:String, level:number, 
        player:Player, arcana:Arcana,
        klass:CharacterClass, aspectPoints: number, 
        energy: number, damageReduction: number
        ) 
        {
            this.characterName = characterName;
            this.level= level;
            this.player = player;
            this.arcana = arcana;
            this.klass = klass;
            this.aspectPoints = aspectPoints;
            this.energy= energy;
            this.damageReduction = damageReduction;
    }

    toString(): string{
        var result =`name: ${this.characterName}, level: ${this.level}, player: {${this.player.toString()}}, Arcana: ${Arcana[this.arcana]}, classe: ${this.klass.toString()}, aspectPoints: ${this.aspectPoints}, energy: ${this.energy}, damageReduction: ${this.damageReduction}`;

        return result;
    }
}

export enum Arcana {
    EMPEROR
}