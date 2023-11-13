import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import { ListItem } from '@rneui/themed';
import { ConsumableItem, Item, WeaponItem } from '../../model/item/Item';
import consumable from "../../data/consumableItem.json"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Character } from '../../model/character/Character';
import itemJson from "../../data/itemJson.json"

let items: ConsumableItem[] = consumable as ConsumableItem[];

let weapons: WeaponItem[] = itemJson as WeaponItem[] 

type Props = {
  character: Character;
}

export default function ItemAccordion({character}:Props) {
  const [expadedItems, setExpandeItems] = useState([] as string[]);

  return (
    <View>
        <FlatList
          data={weapons}
          renderItem={({ item, index }) => (
            <ListItem.Accordion
              key={index}
              content={
                  <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                  </ListItem.Content>
              }
              isExpanded={expadedItems.includes(item.name)}
              onPress={() => {
                if (expadedItems.includes(item.name)) {
                    setExpandeItems(expadedItems.filter((i) => i !== item.name));
                    console.log(expadedItems.filter((i) => i != item.name))
                  } else {
                    setExpandeItems([...expadedItems, item.name]);
                  }
              }}
            >
              {
                <ListItem key={index}>
                  <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <Text>{item.description}</Text>
                    <Text>{item.damage}</Text>
                    <Text>{item.cust}</Text>
                    <Pressable onPress={() => {
                      console.log(character)
                      character.inventory.push(item);
                      AsyncStorage.setItem(character.user.userName, JSON.stringify(character));
                    }}><Text>Adicionar</Text></Pressable>
                  </ListItem.Content>
                </ListItem>
              }
            </ListItem.Accordion>
          )}
        />
    </View>
  )
}