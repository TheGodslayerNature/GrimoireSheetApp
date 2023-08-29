import { Item } from "../src/components/item/Item";
test('The defense item should have the right name and defense points', () => { 
   var item:Item = new Item();

    expect(item.defense(12)).toEqual(12);
 })
 test('item must have the characteristics with the apropriate tier ', () => { 
    var item:Item = new Item();

    expect(item.status()).toEqual("uniforme discreto, mas elegante, da Academia Gekkoukan");
    expect(item.getTier()).toEqual(1);
  })