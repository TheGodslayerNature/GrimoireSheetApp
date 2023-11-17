export class Item {
    
  name: string;
  effect: string;
  special: string;
  cust:number;
  typeName:string = `Item`;
  
  constructor(name: string, effect: string, special: string, cust: number) {
    this.name = name;
    this.effect = effect;
    this.special = special;
    this.cust = cust;
  }
}

export class ConsumableItem extends Item {
  rarity: string;
  typeName:string = `ConsumableType`;

  constructor(
    name: string,
    effect: string,
    special: string,
    cust: number,
    rarity: string
  ) {
    super(name, effect, special, cust);
    this.rarity = rarity;
  }
}

export class AccessoryItem extends Item {
  rarity: string;
  typeName:string = `AccessoryType`;
  constructor(
    name: string,
    effect: string,
    special: string,
    cust: number,
    rarity: string
  ) {
    super(name, effect, special, cust);
    this.rarity = rarity;
  }
}

export class ArmorItem extends Item {
  damageReduction: number;
  bonus: string;
  notes: string;
  typeName:string = `ArmorType`;
  constructor(
    name: string,
    effect: string,
    special: string,
    cust: number,
    damageReduction: number,
    bonus: string,
    notes: string
  ) {
    super(name, effect, special, cust);
    this.damageReduction = damageReduction;
    this.bonus = bonus;
    this.notes = notes;
  }
}

export class WeaponItem extends Item {
  damage: number;
  reach: number;
  extra: string;
  description: string;
  typeName:string = `WeaponType`;

  constructor(
    name: string,
    effect: string,
    special: string,
    cust: number,
    damage: number,
    reach: number,
    extra: string,
    description: string
  ) {
    super(name, effect, special, cust);
    this.damage = damage;
    this.reach = reach;
    this.extra = extra;
    this.description = description;
  }
}
