import { Arcanas } from "components/character/Arcanas";
import { Mag, MagType } from "components/mag/Mag";

export class Persona {
    name:String;
    arcana:Arcanas;
    conviction:String;
    naturalSkill:String;
    pm:number;
    magDeck:Mag[];
    magTypes:MagType[];
    
    constructor(
        name:String, arcana:Arcanas, 
        conviction:String, naturalSkill:String, 
        pm:number, mags: Mag [],
        ...magTypes: MagType []
        ){
            this.name = name;
            this.arcana = arcana;
            this.conviction = conviction;
            this.naturalSkill = naturalSkill;
            this.pm = pm;
            this.magDeck = mags;
            this.magTypes = magTypes;
    }

    toString():String {
        return `name: ${this.name}, Arcana: ${this.arcana.arcanaName}, convicção: ${this.conviction}, Natural Skill: ${this.naturalSkill}, Mag types: { ${this.magTypes} }`;
    }

    getMags() {
        return this.magDeck;
    }
}