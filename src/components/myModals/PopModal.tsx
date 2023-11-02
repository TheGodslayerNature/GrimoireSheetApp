import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import React, { useState } from "react";

export default function PopModal(props:any) {
  return (
    <View>
      <Modal
        transparent={true}
        animationType="fade"
        visible={props.modalVisible}
      >
        <View style={[styles.centeredView, styles.modalContainer]}>
          <Text style={styles.titleText}>{props.attribute}</Text>

          <Text style={styles.suportingText}>{props.dice}</Text>

          <Pressable
          style={styles.backDrop} 
          onPress={() => props.setModalVisible(false)}>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    maxWidth: "80%",
    maxHeight: "50%",
    borderWidth: 3,
    borderRadius: 2,
    borderColor: 'gray',
    backgroundColor: "#FAFAFA",
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: 'center',
    margin: '10%'
    //marginTop: 22,
   // marginLeft: 30
  },
  titleText: {
    color: "#F000000",
    //opacity: 1000,
    fontWeight: "bold",
    fontSize: 22,
  },
  suportingText: {
    color: "black",
    textAlign: "center"
  },
  btn: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  backDrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});
