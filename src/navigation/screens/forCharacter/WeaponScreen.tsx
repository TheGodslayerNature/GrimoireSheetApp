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

let my = myWeapons as WeaponItem[];

export default function WeaponScreen(props: any) {
  const { character } = props.route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#084d6e" }}>
      <DefaultAccordionForItem
        character={character}
        someArrayLikeItem={myWeapons}
      />
      <FlatList
        style={{}}
        data={character.inventory}
        renderItem={({ item, index }) => (
          <Acc
            item={item}
            index={index}
            update={() => {
              character.inventory.forEach((it: Item, i: number) => {
                if (it.name == item.name) {
                  character.inventory.splice(i, 1);
                }
              });

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
