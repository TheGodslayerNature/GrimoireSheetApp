import { Picker } from "@react-native-picker/picker";
import { Arcanas } from "../../model/character/Arcanas";
import { Character } from "../../model/character/Character";
import { CharacterClass } from "../../model/character/CharacterClass2";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
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
  { id: 0, value: { name: "Selecione a Classe", skills: [] } },
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
  const [modalState, setModalState] = useState(false);

  useEffect(() => {
    if (route.params?.createdPersona) {
      console.log("Persona Criada!!!!!!!!");

      console.log(route.params?.createdPersona);
    }
  }, [route.params?.createdPersona]);

  return (
    <KeyboardAvoidingView behavior="padding">
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

          <CubeInput update={(level: number) => setUserLevel(level)} />

          <Pressable style={{ backgroundColor: "#fff", height: 30, marginTop: 10, marginLeft: 35}}>
            <Picker
              itemStyle={{}}
              style={{height: 30 }}
              selectedValue={selectedClassIndex}
              onValueChange={(i) => setSelectedClassIndex(i)}
            >
              {selectClassOptions.map(({ id, value }) => (
                <Picker.Item key={id} value={id} label={value.name} />
              ))}
            </Picker>
          </Pressable>
        </View>

        <View style={{alignItems: 'center'}}>
          <Modal animationType="fade" visible={modalState}>
            <RenderStatus submit={setStatusPoints} />

            <Pressable
              style={styles.btn}
              onPress={() => setModalState(!modalState)}
            >
              <Text>Voltar</Text>
            </Pressable>
          </Modal>

          <Pressable style={styles.btn} onPress={() => setModalState(true)}>
            <Text>Escolha os pontos</Text>
          </Pressable>
        </View>

        <LifeAndEnergyInput
          placeholder="Vida"
          update={(life: number) => setLifePoints(life)}
        />
        <LifeAndEnergyInput
          placeholder="Energia"
          update={(energy: number) => setEnergy(energy)}
        />
        <LifeAndEnergyInput
          placeholder="Aspectos"
          update={(aspect: number) => setAspectPoint(aspect)}
        />

        <View style={styles.btnContainer}>
          <Pressable
            style={[styles.btn]}
            onPress={() => navigation.navigate("CreatingPersona")}
          >
            <Text style={styles.textStyle}>CRIAR PERSONA</Text>
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

              navigation.navigate("HomeScreen", { characterIds });
            }}
            style={styles.btn}
          >
            <Text style={styles.textStyle}> CRIAR PERSONAGEM </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#084d6e",
    // alignItems: "center",
    // justifyContent: "center",
  },
  middleView: {
    height: 500,
  },
  characterInput: {
    height: 50,
    width: 150,
    borderWidth: 2,
    textAlign: "center",
    borderColor: "black",
  },
  btn: {
    height: 50,
    width: 120,
    borderWidth: 2,
    backgroundColor: "#FDED00",
    borderColor: "black",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    alignItems: "center",
    marginTop: 300,
  },
  textStyle: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
