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

type Props = {
  items?: Item[] | undefined;
  weapons?: WeaponItem[] | undefined;
  consumables?: ConsumableItem[] | undefined;
  magics?: Mag[] | undefined;
  character: Character;
};
export default function DefaultAccordion({
  items,
  weapons,
  character,
  consumables,
  magics,
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
                consumableItemData={item}
                index={index}
                update={() => {
                  console.log(character);
                  character.inventory.push(item);
                  //   AsyncStorage.setItem(character.user.userName, JSON.stringify(character));
                }}
              />
            )}
          />
          <FlatList
            data={weapons}
            renderItem={({ item, index }) => (
              <Acc weaponData={item} index={index} />
            )}
          />
          <FlatList
            data={magics}
            renderItem={({ item, index }) => (
              <Acc magicData={item} index={index} />
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
        data={character.inventory}
        renderItem={({ item, index }) => (
          <Acc
            update={() => {
              console.log(character);
              character.inventory.forEach((tem, i) => {
                if (tem === item) {
                  character.inventory.splice(i, 1);
                }
              });
            }}
            itemData={item}
            index={index}
          />
        )}
      />
    </View>
  );
}
