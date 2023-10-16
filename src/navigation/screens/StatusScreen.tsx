import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";
import { Arcanas } from "../../components/character/Arcanas";
import { Character } from "../../components/character/Character";
import { CharacterClass } from "../../components/character/CharacterClass2";
import { Player } from "../../components/player/Player";
import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import StatusPoints from "../../components/statusPoints/statusPoints";
import { Status, UserStatus } from "../../components/user/UserStatus";
import personagensData from "../../data/personagens.json";

var valoresDoJson = personagensData[0];

// var RNFS =  require('react-native-fs');

// var personagensPath = RNFS.DocumentDirectoryPath + "../../data/personagens.json";

const STATUS = [
  Status.FOR,
  Status.TEC,
  Status.VIT,
  Status.MAG,
  Status.AGI,
  Status.SOR,
];

const creatingPesonaScreen = "CreatingPersona";

const classes = [
  CharacterClass.cartaCoringa(),
  CharacterClass.emergente(),
  CharacterClass.sombra(),
  CharacterClass.supressor(),
  CharacterClass.tocha(),
];

export default function StatusScreen({ navigation }: any) {
  const [userLevel, setUserLevel] = useState(0);
  const [userName, setUserName] = useState("");
  const [selectedClassIndex, setSelectedClassIndex] = useState<number>();

  const user: UserStatus = new UserStatus(userName, userLevel);

  let points = [0, 0, 0, 0, 0, 0];

  const submitPoints = () => {
    STATUS.forEach((status) => user.setPointsFor(status, points[status]));
    user.printStatusValues();
  };
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
              borderWidth: 1.5,
              marginLeft: 50,
              alignContent: "center",
              alignItems: "center",
              textAlign: "center",
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

      <View style={{ flexDirection: "row", padding: 15 }}>
        <FlatList
        numColumns={Math.ceil(STATUS.length / 2)}
        data={STATUS}
        renderItem={({item}) => <StatusPoints 
        statusName={Status[item]} 
        setPoints={(value:number) => (points[item] = value)}/>}
        />
        {/* {STATUS.map((status) => (
          <li key={status}>
            <StatusPoints
              statusName={Status[status]}
              setPoints={(value: number) => (points[status] = value)}
            />
          </li>
        ))} */}
      </View>

      <Pressable style={styles.btn} onPress={submitPoints}>
        <Text>Adicionar Pontos</Text>
      </Pressable>

      <TextInput
        style={{
          borderWidth: 2,
          textAlign: "auto",
          margin: 10,
        }}
        placeholder="Pontos de vida"
      />

      <TextInput
        style={{
          borderWidth: 2,
          textAlign: "auto",
          margin: 10,
        }}
        placeholder="Pontos de Energia"
      />

      <Pressable
        onPress={() => {
          if (!selectedClassIndex) {
            console.log("classe nao selecionada");
            return;
          }
          let klass = classes[selectedClassIndex];
          // console.log(klass.name);
          // console.log(
          //   `skills:\n${klass.skills
          //     .flatMap((s) => [s.skillName, s.skillDesc, "\n"])
          //     .join("\n")}`
          // );

          let character = new Character(
            user,
            new Player("i@g.com", "qwerty"),
            Arcanas.DEVIL,
            klass
          );

          AsyncStorage.getItem("characters").then((ids) => {
            let characters = ids ? (JSON.parse(ids!) as Array<string>) : [];
            characters.push(character.user.userName);
            console.log(characters);

            AsyncStorage.multiSet([
              ["characters", JSON.stringify(characters)],
              [character.user.getName(), JSON.stringify(character)],
            ]).then(() => console.log("saved!!"));
          });

          navigation.navigate("CreatingPersona");
        }}
        style={{
          borderWidth: 2.5,
          borderColor: "gold",
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
  },
  statusPoints: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    borderWidth: 2,
    textAlign: "center",
  },
  btn: {
    height: 50,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "black",
    color: "#FDED00",
    margin: 10,
  },
  ImageStyle: {},
});
