import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";
import React, { useEffect } from "react";
import { Mag } from "../../../model/mag/Mag";
import DefaultAccordionForItem from "../../../components/accordion/DefaultAccordionForItem";

import consumables from "../../../data/consumableItem.json";
import weapons from "../../../data/itemJson.json";
import magias from "../../../model/mag/mags.json";
import { Item, WeaponItem } from "../../../model/item/Item";
import ShowItems from "../../../components/accordion/ShowItems";
import Acc from "../../../components/accordion/Acc";
import AsyncStorage from "@react-native-async-storage/async-storage";

let myWeapons: WeaponItem[] = weapons as WeaponItem[];

let my:any[];

export default function WeaponScreen(props: any) {
  const { character } = props.route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#084d6e" }}>
      <DefaultAccordionForItem
        character={character}
        someArrayLikeItem={myWeapons}
        inventory={character.inventory.filter((item:Item) => item.typeName == "WeaponType")}
      />

    </View>
  );
}
