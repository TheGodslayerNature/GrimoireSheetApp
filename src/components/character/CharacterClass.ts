export class CharacterClass {

    klass:Klass;

    constructor(klass:Klass) {
     this.klass = klass;
    }

    skills() {
        return this.klass;
    }

    toString(): String {
        return Object.keys(Klass)[Object.values(Klass).indexOf(this.klass)];
    }
}

export enum Klass {
    JOKER = "❖ Versatilidade Inigualável:, ❖ Borboleta Social:, ❖ Convidado Especial:",
    
}