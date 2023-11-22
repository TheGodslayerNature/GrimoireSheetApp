import {
  View,
  Text,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import {
  AccessoryItem,
  ArmorItem,
  ConsumableItem,
  Item,
  WeaponItem,
} from "../../model/item/Item";
import { Character } from "../../model/character/Character";

import consumables from "../../data/consumableItem.json";
import weapons from "../../data/itemJson.json";
import magias from "../../model/mag/mags.json";

import Acc from "./Acc";
import { Mag } from "../../model/mag/Mag";
import { Icon } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Persona } from "../../model/persona/Persona";
import ShowItems from "../../components/accordion/ShowItems";

type Props = {
  someArrayLikeItem:
    | ConsumableItem[]
    | WeaponItem[]
    | Item[]
    | AccessoryItem[]
    | ArmorItem[];
  character: Character;
  inventory: WeaponItem[] | Item[] | ConsumableItem[];
};
export default function DefaultAccordionForItem({
  character,
  someArrayLikeItem,
  inventory,
}: Props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.container}>
          <Pressable
            style={styles.btn}
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <Icon name="x" type="octicon" />
          </Pressable>
          <FlatList
            data={someArrayLikeItem}
            renderItem={({ item, index }) => (
              <Acc
                item={item}
                index={index}
                update={() => {
                  console.log(character);
                  console.log(item);
                  character.inventory.push(item);
                  // AsyncStorage.setItem(character.user.userName, JSON.stringify(character));
                }}
              />
            )}
          />
        </View>
      </Modal>

      <View style={styles.container}>
        <Pressable onPress={() => setModalVisible(true)} style={styles.btn}>
          <Text>Escolha algum item </Text>
        </Pressable>
      </View>

      <FlatList
        style={{}}
        data={inventory}
        renderItem={({ item, index }) => (
          <Acc item={item} index={index} update={() => {
            removeActualItem(item, character);
          }} />
        )}
      />
    </View>
  );
}

let removeActualItem = (item: Item, character: Character) => {
  character.inventory.forEach((it: Item, i: number) => {
    if (it.name == item.name) {
      character.inventory.splice(i, 1);
    }
    AsyncStorage.setItem(character.user.userName, JSON.stringify(character));
  });
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "#084d6e" },
  btn: {
    height: 40,
    width: 80,
    backgroundColor: "#FDED00",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
