import { View, Text, FlatList, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import { ConsumableItem, Item, WeaponItem } from "../../model/item/Item";
import { Character } from "../../model/character/Character";

import consumables from "../../data/consumableItem.json";
import weapons from "../../data/itemJson.json";
import magias from "../../model/mag/mags.json";

import Acc from "./Acc";
import { Mag } from "../../model/mag/Mag";
import { Icon } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Persona } from "../../model/persona/Persona";

type Props = {
  consumables: ConsumableItem[] | WeaponItem[] | Item[];
  character: Character;
};
export default function DefaultAccordionForItem({
  character,
  consumables,
}: Props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal visible={modalVisible} animationType="fade">
        <View>
          <Pressable
            style={{}}
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <Icon name="x" type="octicon" />
          </Pressable>
          <FlatList
            data={consumables}
            renderItem={({ item, index }) => (
              <Acc
                item={item}
                index={index}
                update={() => {
                  console.log(character);
                  console.log(item);
                  character.inventory.push(item);
                  //   AsyncStorage.setItem(character.user.userName, JSON.stringify(character));
                }}
              />
            )}
          />
        </View>
      </Modal>

      <Pressable onPress={() => setModalVisible(true)}>
        <Text>Aperte</Text>
      </Pressable>

      <Pressable onPress={() => console.log(character)}>
        <Text>Usuario</Text>
      </Pressable>

      <FlatList
        data={character.inventory.filter((item) => item instanceof WeaponItem)}
        renderItem={({ item, index }) => (
          <Acc
            item={item}
            index={index}
            update={() => {
              character.inventory.forEach((tem, i) => {
                if (tem.name === item.name) {
                  character.inventory.splice(i, 1);
                }
                console.log(character);
                //   AsyncStorage.setItem(character.user.userName, JSON.stringify(character));
              });
            }}
          />
        )}
      />
    </View>
  );
}
