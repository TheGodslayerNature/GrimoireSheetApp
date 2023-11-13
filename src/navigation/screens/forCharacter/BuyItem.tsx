import { View, Text, FlatList, Modal, Pressable } from "react-native";
import React, { useState } from "react";

import consumableItem from "../../../data/consumableItem.json";
import { Icon } from "@rneui/themed";
import { ConsumableItem } from "../../../model/item/Item";
import ItemAccordion from "../../../components/accordion/ItemAccordion";
import ShowItems from "../../../components/accordion/ShowItems";

let items: ConsumableItem[] = consumableItem as ConsumableItem[];

export default function BuyItem(props: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const { character } = props.route.params;

  return (
    <View style={{ flex: 1 }}>
      <Modal transparent={true} animationType="slide" visible={modalVisible}>
        <View>
          <Pressable
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <Icon name="x" type="octicon" />
          </Pressable>
          <Text>Adicionar Magias</Text>

          <ItemAccordion character={character} />
        </View>
      </Modal>
      <Pressable
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Text>Aperte</Text>
      </Pressable>

      <ShowItems character={character}/>
    </View>
  );
}
