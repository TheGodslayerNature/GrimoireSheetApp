export class Mag {

    magType:MagType;
    tier:number; 
    name:String; 
    categoria:String;
    alcance:String; 
    efeito:String; 
    descricao:String
    damage:number = 0;

    constructor(
        magType:MagType,
        tier:number, name:String, 
        categoria:String, alcance:String, 
        efeito:String, descricao:String
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

        toString():String {
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
    PHYSICAL,
    FIRE,
    ICE,
    WIND,
    LIGHTNING,
    LIGHT,
    DARKNESS,
    OMNIPOTENT,
    HEALING,
    DEFENSE,
    BUFF,
    DEBUFF,
    STATUS,
    INTEL,
    MISCELLANEOUS,
}