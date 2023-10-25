import { AccesoryItem, ArmorItem, WeaponItem } from "../item/Item";


export class Equipment {
  armor: ArmorItem;
  accesory: AccesoryItem;
  weapon: WeaponItem;

  constructor(armor: ArmorItem, accesory: AccesoryItem, weapon: WeaponItem) {
    this.armor = armor,
    this.accesory = accesory,
    this.weapon = weapon;
  }
}
