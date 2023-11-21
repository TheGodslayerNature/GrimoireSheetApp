import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { ListItem } from "@rneui/themed";
import { ConsumableItem, Item, WeaponItem } from "../../model/item/Item";
import { Mag, MagType } from "../../model/mag/Mag";

type Props = {
  item: ConsumableItem | WeaponItem | Item | Mag;
  index: number;
  update?(): void;
  attack?(): void | undefined
};

export default function Acc({ item, index, update, attack }: Props) {
  const [expadedItem, setExpandeItem] = useState(false);

  return (
    <View style={{  }}>
      <ListItem.Accordion
        key={index}
        content={
          <ListItem.Content>
            <ListItem.Title>
              <Text>{item.name}</Text>
            </ListItem.Title>
          </ListItem.Content>
        }
        isExpanded={expadedItem}
        onPress={() => {
          setExpandeItem(!expadedItem);
        }}
      >
        {
          <ListItem key={index}>
            <ListItem.Content>
              <Text>{item.name}</Text>
              <Pressable
                onPress={() => {
                  update!();
                  // console.log(character)
                  // character.inventory.push(item);
                  // AsyncStorage.setItem(character.user.userName, JSON.stringify(character));
                }}
              >
                <Text>Adicionar</Text>
              </Pressable>
            </ListItem.Content>
          </ListItem>
        }
      </ListItem.Accordion>
    </View>
  );
}
