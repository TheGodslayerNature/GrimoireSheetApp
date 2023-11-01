import { Picker } from "@react-native-picker/picker";
import { Arcanas } from "../../model/character/Arcanas";
import { Character } from "../../model/character/Character";
import { CharacterClass } from "../../model/character/CharacterClass2";
import React, { useEffect, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { UserAttributes } from "../../model/userAttributes/UserAttributes";
import { saveCharacter } from "../../util/Storage";
import RenderStatus from "../../components/renderStatus/RenderStatus";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/MainNavigator";
import LifeAndEnergyInput from "../../components/LifeAndEnergyInput";
import CubeInput from "../../components/myInputs/cubeInput";

interface Props
  extends NativeStackScreenProps<RootStackParamList, "StatusScreen"> {}

const selectClassOptions = [
  { id: 0, value: {name: "Selecione a Classe", skills: []} },
  { id: 1, value: CharacterClass.cartaCoringa() },
  { id: 2, value: CharacterClass.emergente() },
  { id: 3, value: CharacterClass.sombra() },
  { id: 4, value: CharacterClass.supressor() },
  { id: 5, value: CharacterClass.tocha() },
];

let character: Character;

let criarCharacter = (
  name: string,
  level: number,
  points: number[],
  klass: CharacterClass
) => {
  character = new Character(
    new UserAttributes(name, level, points),
    Arcanas.DEVIL,
    klass
  );
};

export default function StatusScreen({ route, navigation }: Props) {
  const [userLevel, setUserLevel] = useState(0);
  const [userName, setUserName] = useState("");
  const [lifePoints, setLifePoints] = useState<number>(0);
  const [energy, setEnergy] = useState<number>(0);
  const [aspectPoint, setAspectPoint] = useState<number>(0);
  const [selectedClassIndex, setSelectedClassIndex] = useState(0);
  const [statusPoints, setStatusPoints] = useState<Array<number>>();

  useEffect(() => {
    if (route.params?.createdPersona) {
      console.log("Persona Criada!!!!!!!!");

      console.log(route.params?.createdPersona);
    }
  }, [route.params?.createdPersona]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={styles.characterInput}
          placeholder="Nome do personagem"
          onChangeText={(name) => {
            setUserName(name);
          }}
        />

        <CubeInput update={(level: any) => setUserLevel(level)} />

        <Picker
          style={{ width: 150, height: 50 }}
          selectedValue={selectedClassIndex}
          onValueChange={(i) => setSelectedClassIndex(i)}
        >
          {selectClassOptions.map(({ id, value }) => (
            <Picker.Item key={id} value={id} label={value.name} />
          ))}
        </Picker>
      </View>

      <RenderStatus submit={setStatusPoints} />

      <LifeAndEnergyInput
        updateLife={(life: any) => setLifePoints(life)}
        updateEnergy={(ener: any) => setEnergy(ener)}
      />

      <TextInput
        style={{
          borderWidth: 2,
          textAlign: "center",
          margin: 10,
          borderColor: "#FDED00",
        }}
        placeholder="Pontos de aspectos"
        onChangeText={(aspect) => setAspectPoint(Number(aspect))}
      />

      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("CreatingPersona")}
      >
        <Text>Criar Persona</Text>
      </Pressable>

      <Pressable
        onPress={async () => {
          if (selectedClassIndex == 0) {
            console.log("classe nao selecionada");
            return;
          }

          if (!route.params?.createdPersona) {
            console.log("Persona não criada!");
            return;
          }

          let klass = selectClassOptions[selectedClassIndex].value;

          criarCharacter(userName, userLevel, statusPoints!, klass);

          character.setLifePoints(lifePoints);
          character.setCurrentLifePoints(lifePoints);
          character.setEnergy(energy);
          character.setCurrentEnergy(energy);
          character.setAspectPoints(aspectPoint);
          character.setCurrentAspectPoint(aspectPoint);
          console.log(character);

          character.setPersona(route.params.createdPersona);

          let characterIds = await saveCharacter(character);

          navigation.navigate("HomeScreen", {characterIds});
        }}
        style={styles.btn}
      >
        <Text> CRIAR PERSONAGEM </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#084d6e",
    alignItems: "center",
    justifyContent: "center",
  },
  characterInput: {
    height: 50,
    width: "80%",
    borderWidth: 2,
    textAlign: "center",
    borderColor: "#FDED00",
  },
  statusPoints: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    borderWidth: 2,
    textAlign: "center",
    borderColor: "#FDED00",
  },
  btn: {
    height: 50,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FDED00",
    margin: 10,
  },
  inputStyle: {
    height: 50,
    width: 50,
    borderWidth: 2,
    marginLeft: 50,
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderColor: "#FDED00",
  },
});
