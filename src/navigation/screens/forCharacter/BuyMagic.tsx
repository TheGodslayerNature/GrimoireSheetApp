import { View, Text, Modal, Pressable, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import Accordion from "../../../components/accordion/Accordion";
import ListMagics from "../../../components/accordion/ListMagics";

//Usar Accordion para o drop

export default function BuyMagic(props: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const { character } = props.route.params;

  return (
    <View style={styles.container}>
      <View>
        <Modal animationType="slide" visible={modalVisible}>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "bold" }}>Adicionar Magias</Text>
          </View>
          <Accordion chrac={character} />
          <Pressable
            style={{ borderWidth: 10, borderColor: "#FDED00" }}
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <Text>Fechar Modal</Text>
          </Pressable>
        </Modal>

        <View style={{ flexDirection: "row" }}>
          <Text>Magic</Text>
          <Pressable
            onPress={() => setModalVisible(true)}
            style={styles.addBtn}
          >
            <Text>Comprar</Text>
          </Pressable>
        </View>

        <ListMagics
        character={character}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  addBtn: {
    marginLeft: 60,
    height: 20,
    width: 80,
    backgroundColor: "#FDED00",
    borderWidth: 2,
    borderRadius: 5,
  },
});
