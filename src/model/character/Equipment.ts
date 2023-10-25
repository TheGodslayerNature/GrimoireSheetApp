import { AccessoryItem, ArmorItem, WeaponItem } from "../item/Item";


export class Equipment {
  armor: ArmorItem;
  accesory: AccessoryItem;
  weapon: WeaponItem;

  constructor(armor: ArmorItem, accesory: AccessoryItem, weapon: WeaponItem) {
    this.armor = armor,
    this.accesory = accesory,
    this.weapon = weapon;
  }
}
