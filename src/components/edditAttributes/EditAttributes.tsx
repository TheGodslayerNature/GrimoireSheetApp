import {
  View,
  Text,
  Modal,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import RenderStatus from "../../components/renderStatus/RenderStatus";
import { Character } from "../../model/character/Character";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {
  onPress: () => void;
  character: Character;
};

export default function EditAttributes(props: Props) {
  const character = props.character;

  //Criar um metodo no storage para atualizar dos dados dos personagens
  return (
    <View style={styles.container}>
      <RenderStatus
        submit={(points) => {
          character.user.statusPoints = points;
          AsyncStorage.setItem(
            character.user.userName,
            JSON.stringify(character)
          );
        }}
        submitSocial={(points) => {
          character.user.socialPoints = points;
          AsyncStorage.setItem(
            character.user.userName,
            JSON.stringify(character)
          );
        }}
      />
      <Pressable
        style={styles.btn}
        onPress={() => {
          props.onPress();
        }}
      >
        <Text>Voltar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    borderWidth: 2,
    borderColor: "yellow",
    alignItems: "center",
  },
  btn: {
    height: 50,
    width: 80,
    borderWidth: 1.2,
    borderColor: "black",
    backgroundColor: "#FDED00",
    alignItems: "center",
    justifyContent: "center",
  },
});
