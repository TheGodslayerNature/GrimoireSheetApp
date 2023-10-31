import { View, Text, Pressable, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function AlertModal(props: any) {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.alertBox}>
          <Text style={{ color: "black" }}>Funcionando</Text>

          <Pressable onPress={() => setModalVisible(false)}>
            <Text>{props.diceValue}</Text>
          </Pressable>
        </View>
      </Modal>

      <View>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  btn: {
    borderWidth: 2,
    borderColor: "red",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  alertBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
