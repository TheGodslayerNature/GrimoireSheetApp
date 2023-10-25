import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { ListItem } from "@rneui/themed";
import { ConsumableItem, Item, WeaponItem } from "../../model/item/Item";
import { Mag, MagType } from "../../model/mag/Mag";

type Props = {
  consumableItemData?: ConsumableItem | undefined;
  weaponData?: WeaponItem | undefined;
  itemData?: Item
  magicData?: Mag | undefined
  index: number;
  update?(): void
};

export default function Acc({ itemData, consumableItemData, index, weaponData, magicData, update }: Props) {
  const [expadedItem, setExpandeItem] = useState(false);

  return (
    <View>
      <ListItem.Accordion
        key={index}
        content={
          <ListItem.Content>
            <ListItem.Title>
              <Text>{consumableItemData?.name}</Text>
              <Text>{itemData?.name}</Text>
              <Text>{weaponData?.name}</Text>
              <Text>{magicData?.name}</Text>
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
              <Text>{itemData?.name}</Text>
              <Text>{itemData?.effect}</Text>
              <Text>{itemData?.cust}</Text>
              <Text>{itemData?.special}</Text>
              <Text>{weaponData?.name}</Text>
              <Text>{weaponData?.description}</Text>
              <Text>{weaponData?.cust}</Text>
              <Text>{magicData?.name}</Text>
              <Text>{magicData?.categoria}</Text>
              <Text>{magicData?.descricao}</Text>
              <Text>{magicData?.damage}</Text>
              <Text>{consumableItemData?.effect}</Text>
              <Text>{consumableItemData?.special}</Text>
              <Text>{consumableItemData?.cust}</Text>
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
