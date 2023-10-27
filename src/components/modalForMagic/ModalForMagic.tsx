import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import Accordion from "../../components/accordion/Accordion";

export default function ModalForMagic() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal animationType="slide" visible={modalVisible}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold" }}>Adicionar Magias</Text>
        </View>

        <Accordion/>

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
        <Pressable onPress={() => setModalVisible(true)} style={styles.addBtn}>
          <Text>++</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addBtn: {
    marginLeft: 60,
    height: 20,
    width: 80,
    backgroundColor: "#FDED00",
    borderWidth: 2,
    borderRadius: 5,
  },
});
