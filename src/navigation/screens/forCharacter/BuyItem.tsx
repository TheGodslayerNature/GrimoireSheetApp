import { View, Text, FlatList, Modal, Pressable } from "react-native";
import React, { useState } from "react";

import consumableItem from "../../../data/consumableItem.json";
import { Icon } from "@rneui/themed";
import { ConsumableItem, Item } from "../../../model/item/Item";
import DefaultAccordionForItem from "../../../components/accordion/DefaultAccordionForItem";
import ShowItems from "../../../components/accordion/ShowItems";
import Acc from "../../../components/accordion/Acc";
import AsyncStorage from "@react-native-async-storage/async-storage";

let items: ConsumableItem[] = consumableItem as ConsumableItem[];

export default function BuyItem(props: any) {
  const { character } = props.route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#084d6e" }}>
      <DefaultAccordionForItem
        character={character}
        someArrayLikeItem={items}
      />

      <FlatList
        style={{ flex: 1 }}
        data={character.inventory}
        renderItem={({ item, index }) => (
          <Acc
            item={item}
            index={index}
            update={() => {

              character.inventory.forEach((it:Item,i:number) => {
                if(it.name == item.name){
                  character.inventory.splice(i,1)
                }
              })

              AsyncStorage.setItem(
                character.user.userName,
                JSON.stringify(character)
              );
            }}
          />
        )}
      />
    </View>
  );
}
