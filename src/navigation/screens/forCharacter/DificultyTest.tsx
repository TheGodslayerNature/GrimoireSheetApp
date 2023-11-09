import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  Alert,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { Status } from "../../../model/userAttributes/UserAttributes";
import GenerateDice from "../../../components/randomDice/GenerateDice";
import PopModal from "../../../components/myModals/PopModal";
import EditAttributes from "../../../components/edditAttributes/EditAttributes";

export default function DificultyTest(props: any) {
  const { character } = props.route.params;
  const [diceType, setDiceType] = useState<number>(6);
  const [modalState, setModalState] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <Pressable
          style={styles.btn}
          onPress={() => {
            setDiceType(4);
          }}
        >
          <Text style={styles.btnText}>D4</Text>
        </Pressable>

        <Text style={styles.ActualDice}>Atual: D{diceType}</Text>

        <Pressable
          style={styles.btn}
          onPress={() => {
            setDiceType(6);
          }}
        >
          <Text style={styles.btnText}>D6</Text>
        </Pressable>
      </View>

      <Modal visible={modalState} animationType="fade">

      <EditAttributes onPress={() => setModalState(false)}/>

      </Modal>

      <View style={{ maxHeight: 50 }}>
        <Pressable
          style={styles.btn}
          onPress={() => {
            setModalState(true);
          }}
        >
          <Text>Editar</Text>
        </Pressable>
      </View>

      <FlatList
        //numColumns={character.user.statusPoints.length / 2}
        data={character.user.statusPoints}
        renderItem={({ item, index }) => (
          // <Text>{item}</Text>
          <GenerateDice
            diceType={diceType}
            numberToRoll={character.user.statusPoints[index]}
            attType={Status[index]}
            personagem={character}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#084d6e",
  },
  btnContainer: {
    height: "10%",
    flexDirection: "row",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  btn: {
    width: 80,
    height: "40%",
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "#FDED00",
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  ActualDice: {
    borderWidth: 1.5,
    borderColor: "black",
    height: 20,
    alignItems: "center",
    margin: 20,
    width: 80,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#FDED00",
  },
  btnText: {
    fontWeight: "bold",
  },
});
