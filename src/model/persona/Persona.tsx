import { Arcanas } from "model/character/Arcanas";
import { Mag, MagType } from "model/mag/Mag";

export class Persona {
    name:string;
    arcana:Arcanas;
    conviction:string;
    naturalSkill:string;
    pm:number;
    magDeck:Mag[];
    magTypes:MagType[];
    personaLevel:number = 0;
    
    constructor(
        name:string, arcana:Arcanas, 
        conviction:string, naturalSkill:string, 
        pm:number,...magTypes: MagType []
        ){
            this.name = name;
            this.arcana = arcana;
            this.conviction = conviction;
            this.naturalSkill = naturalSkill;
            this.pm = pm;
            this.magDeck = [];
            this.magTypes = magTypes;
    }

    toString():String {
        return `name: ${this.name}, Arcana: ${this.arcana.arcanaName}, convicção: ${this.conviction}, Natural Skill: ${this.naturalSkill}, Mag types: { ${this.magTypes} }`;
    }

    getMags() {
        return this.magDeck;
    }

    setPersonaLevel(level:number) {
        this.personaLevel = level;
    }
    getLevel() {
        return this.personaLevel;
    }
}