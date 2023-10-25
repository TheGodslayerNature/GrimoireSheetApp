import { View, Text, FlatList, Modal, Pressable } from "react-native";
import React, { useState } from "react";

import consumableItem from "../../../data/consumableItem.json";
import { Icon } from "@rneui/themed";
import { ConsumableItem } from "../../../model/item/Item";
import ItemAccordion from "../../../components/accordion/ItemAccordion";
import ShowItems from "../../../components/accordion/ShowItems";
import DefaultAccordionForItem from "../../../components/accordion/DefaultAccordionForItem";

let items: ConsumableItem[] = consumableItem as ConsumableItem[];

export default function BuyItem(props: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const { character } = props.route.params;

  return (
    <View style={{ flex: 1 }}>
      
      <DefaultAccordionForItem character={character} consumables={items}/>
    </View>
  );
}
