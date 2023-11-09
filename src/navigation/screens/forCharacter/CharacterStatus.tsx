import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  FlatList,
  TextInput,
  Modal,
} from "react-native";
import ThemedCard from "@rneui/themed/dist/Card";
import React, { useEffect, useState } from "react";
import Bar from "../../../util/bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CharacterInformation from "../../../components/characters/CharacterInformation";
import ChangeCharacterInput from "../../../components/myModals/ChangeCharacterInput";

export default function CharacterStatus(props: any) {
  const { character } = props.route.params;
  const [life, setLife] = useState(character.lifePoints);
  const [currentLife, setCurrentLife] = useState<number>(character.currentLife);
  const [energy, setEnergy] = useState(character.energy);
  const [aspectPoint, setAspectPoint] = useState(character.aspectPoints);
  const [modalState, setModalState] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.characterInformationContainer}>
        <CharacterInformation character={character} />
      </View>

      <ChangeCharacterInput
        character={character}
        modalState={modalState}
        setModalState={setModalState}
      />

      <View style={styles.viewForChangeStatusBtn}>
        <Pressable
          style={styles.btnForChangeStatus}
          onPress={() => {
            setModalState(true);
          }}
        >
          <Text>Editar</Text>
        </Pressable>
      </View>

      <View style={styles.barStyles}>
        <Bar
          color="red"
          currentPoints={character.currentLife}
          totalPoints={character.lifePoints}
          label={"vida"}
          updatePoints={async (point: number) => {
            setCurrentLife(point);
            character.currentLife = point;
            await AsyncStorage.setItem(
              character.user.userName,
              JSON.stringify(character)
            );
          }}
        />
        <Bar
          color="blue"
          currentPoints={character.currentEnergy}
          totalPoints={character.energy}
          label={"energia"}
          updatePoints={async (point: number) => {
            setEnergy(point);
            character.currentEnergy = point;
            await AsyncStorage.setItem(
              character.user.userName,
              JSON.stringify(character)
            );
          }}
        />
        <Bar
          color="purple"
          currentPoints={character.currentAspectPoint}
          totalPoints={character.aspectPoints}
          label={"Pontos de aspecto"}
          updatePoints={async (point: number) => {
            setAspectPoint(point);
            character.currentAspectPoint = point;
            await AsyncStorage.setItem(
              character.user.userName,
              JSON.stringify(character)
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#084d6e",
  },
  imgPortrait: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  characterInformationContainer: {
    flex: 1,
  },
  barStyles: {
    alignItems: "center",
    margin: "15%",
  },
  informationTextStyle: {
    fontSize: 14,
  },
  modalStyles: {
    borderWidth: 1.6,
    borderColor: "red",
    height: 50,
  },
  btn: {
    borderRadius: 5,
    height: 20,
    width: 50,
    borderWidth: 2,
    borderColor: "black",
  },
  viewForChangeStatusBtn: {
    alignItems: 'center'
  },
  btnForChangeStatus: {
    borderRadius: 5,
    height: 20,
    width: 70,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: '#FDED00',
    alignItems: "center"
  }
});
