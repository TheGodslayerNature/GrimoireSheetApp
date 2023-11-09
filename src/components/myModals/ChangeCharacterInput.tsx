import {
  View,
  Text,
  Modal,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Character } from "../../model/character/Character";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Status } from "../../model/userAttributes/UserAttributes";

type Props = {
  character: Character;
  modalState: boolean;
  setModalState(value: boolean): void;
};

export default function ChangeCharacterInput({
  character,
  modalState,
  setModalState,
}: Props) {
  return (
    <View style={styles.container}>
      <Modal style={styles.modalStyles} visible={modalState} animationType="slide">
        <View style={styles.containerInsideModal}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Vida"
            onChangeText={async (vida: string) => {
              character.lifePoints = Number(vida);
              await AsyncStorage.setItem(
                character.user.userName,
                JSON.stringify(character)
              );
            }}
          />

          <TextInput
            style={styles.inputStyle}
            placeholder="Energia"
            onChangeText={async (energia: string) => {
              character.energy = Number(energia);
              await AsyncStorage.setItem(
                character.user.userName,
                JSON.stringify(character)
              );
            }}
          />

          <TextInput
            style={styles.inputStyle}
            placeholder="Aspetos"
            onChangeText={async (aspectos: string) => {
              character.aspectPoints = Number(aspectos);
              await AsyncStorage.setItem(
                character.user.userName,
                JSON.stringify(character)
              );
            }}
          />

          <Pressable style={styles.btn} onPress={() => setModalState(false)}>
            <Text style={styles.textStyle}>Sair</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalStyles: {},
  containerInsideModal: {
    height: "50%",
    width: "100%",
    borderWidth: 2,
    borderColor: "yellow",
    alignItems: "center",
  },
  inputStyle: {
    height: 50,
    width: 150,
    borderWidth: 2,
    textAlign: "center",
    borderColor: "black",
    margin: 10,
  },
  btn: {
    height: 20,
    width: 80,
    borderWidth: 1.2,
    borderColor: "black",
    backgroundColor: "#FDED00",
    alignItems: 'center',
    alignContent: 'center'
  },
  textStyle: {
    fontSize: 14,
  }
});
