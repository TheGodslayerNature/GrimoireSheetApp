export class Mag {

    magType:MagType;
    tier:number; 
    name:string; 
    categoria:string;
    alcance:string; 
    efeito:string; 
    descricao:string
    damage:number = 0;

    constructor(
        magType:MagType,
        tier:number, name:string, 
        categoria:string, alcance:string, 
        efeito:string, descricao:string
        )
        {
            this.magType = magType; 
            this.tier = tier;
            this.name = name;
            this.categoria = categoria;
            this.alcance = alcance;
            this.efeito = efeito;
            this.descricao = descricao;
        }

        toString():string {
            return `tier ${this.tier}; name: ${this.name}; categoria: ${this.categoria}; alcance: ${this.alcance}; efeito: ${this.efeito}; descrição: ${this.descricao}`
        }

        getDamage():number {
            return this.damage;
        }
        setDamage(damage:number) {
            this.damage = damage;
        }

}

export enum MagType {
    PHYSICAL = "PHYSICAL",
    FIRE = "FIRE",
    ICE = "ICE",
    WIND = "WIND",
    LIGHTNING = "LIGHTNING",
    LIGHT = "LIGHT",
    DARKNESS = "DARKNESS",
    OMNIPOTENT = "OMNIPOTENT",
    HEALING = "HEALING",
    DEFENSE = "DEFENSE",
    BUFF = "BUFF",
    DEBUFF = "DEBUFF",
    STATUS = "STATUS",
    INTEL = "INTEL",
    MISCELLANEOUS = "MISCELLANEOUS",
}