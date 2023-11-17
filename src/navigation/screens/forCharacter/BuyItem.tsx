import { View, Text, FlatList, Modal, Pressable } from "react-native";
import React, { useState } from "react";

import consumableItem from "../../../data/consumableItem.json";
import { Icon } from "@rneui/themed";
import { ConsumableItem } from "../../../model/item/Item";
import DefaultAccordionForItem from "../../../components/accordion/DefaultAccordionForItem";
import ShowItems from "../../../components/accordion/ShowItems";
import Acc from "../../../components/accordion/Acc";

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
        data={character.inventory}
        renderItem={({ item, index }) => <Acc item={item} index={index} 
        update={() => {
        }}
        />}
      />
    </View>
  );
}
