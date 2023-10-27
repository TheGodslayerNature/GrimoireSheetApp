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

interface Props
  extends NativeStackScreenProps<RootStackParamList, "StatusScreen"> {}

const classes = [
  CharacterClass.cartaCoringa(),
  CharacterClass.emergente(),
  CharacterClass.sombra(),
  CharacterClass.supressor(),
  CharacterClass.tocha(),
];

export default function StatusScreen({ route, navigation }: Props) {
  const [userLevel, setUserLevel] = useState(0);
  const [userName, setUserName] = useState("");
  const [lifePoints, setLifePoints] = useState<number>(0);
  const [energy, setEnergy] = useState<number>(0);
  const [selectedClassIndex, setSelectedClassIndex] = useState<number>();
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

      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TextInput
          style={[styles.characterInput]}
          placeholder="Nome do personagem"
          onChangeText={(name) => {
            setUserName(name);
          }}
        />

        <TextInput
          style={[
            ,
            {
              height: 50,
              width: 50,
              borderWidth: 2,
              marginLeft: 50,
              alignContent: "center",
              alignItems: "center",
              textAlign: "center",
              borderColor: "#FDED00",
            },
          ]}
          placeholder="Nível"
          inputMode="numeric"
          editable={String(userLevel).at(1) ? false : true}
          onChangeText={(value) => setUserLevel(Number(value))}
          maxLength={2}
        />

        <Picker
          style={{ width: 150, height: 50 }}
          selectedValue={selectedClassIndex}
          onValueChange={(i) => setSelectedClassIndex(i)}
        >
          {classes.map((classe, i) => (
            <Picker.Item key={i} value={i} label={classe.name} />
          ))}
        </Picker>
      </View>

      <View style={styles.ImageStyle}></View>

      <RenderStatus submit={setStatusPoints} />

      <LifeAndEnergyInput
      updateLife={(life:any) => setLifePoints(life)}
      updateEnergy={(ener:any) => setEnergy(ener)}
      />

      <Pressable style={styles.btn}
      onPress={ () => navigation.navigate("CreatingPersona")}
      >
        <Text>Criar Persona</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          if (!selectedClassIndex) {
            console.log("classe nao selecionada");
            return;
          }

          if (!route.params?.createdPersona) {
            console.log("Persona não criada!");
            return;
          }

          let klass = classes[selectedClassIndex];

          let character = new Character(
            new UserAttributes(userName, userLevel, statusPoints),
            Arcanas.DEVIL,
            klass
          );
          character.setLifePoints(lifePoints);
          character.setEnergy(energy);
          console.log(character);

          character.setPersona(route.params.createdPersona);

          saveCharacter(character);

          navigation.navigate("HomeScreen");
        }}
        style={{
          borderWidth: 2.5,
          borderColor: "#FDED00",
          borderRadius: 20,
          paddingRight: 40,
          marginTop: 20,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            margin: 15,
          }}
        >
          CRIAR PERSONAGEM
        </Text>
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
  ImageStyle: {},
});
