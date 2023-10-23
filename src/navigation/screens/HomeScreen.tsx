import React, { useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  SectionList,
  Dimensions,
} from "react-native";

import { Arcanas } from "../../components/character/Arcanas";
import { Character } from "../../components/character/Character";
import { CharacterClass } from "../../components/character/CharacterClass2";
import CharacterView from "../../components/characters/CharactersView";
import { Mag, MagType } from "../../components/mag/Mag";
import { Persona } from "../../components/persona/Persona";
import { Player } from "../../components/player/Player";
import { UserStatus } from "../../components/user/UserStatus";
import personagensData from "../../data/personagens.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CharacterStatus from "./CharacterScreen";
import StatusScreen from "./StatusScreen";
import CreatingPersona from "./CreatingPersona";

/*
Paleta de cores

Azul petroleo: #084d6e

amarelo: #FDED00;
*/

var valoresDoJson = personagensData[0];

export default function CharacterScreen({navigation: { navigate } }: any) {
  const [characters, setCharacters] = useState([] as Character[]);
  const [personas, setPersonas] = useState([] as Persona[]);

  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem("characters");
        let ids: string[] = value ? JSON.parse(value) : [];
        console.log(ids);
        let pairs = await AsyncStorage.multiGet(ids);
        let loadedChars: Character[] = pairs
          .filter((p) => p[1] != null)
          .map((p) => JSON.parse(p[1]!));
        console.log(loadedChars);
        setCharacters(loadedChars);
      } catch (error) {
        // Error retrieving data
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        let value = await AsyncStorage.getItem("personas");
        let ids: string[] = value ? JSON.parse(value) : [];
        console.log(ids);
        let pairs = await AsyncStorage.multiGet(ids);
        let loadedPersonas: Persona[] = pairs.map((p) => JSON.parse(p[1]!));
        console.log(loadedPersonas);
        setPersonas(loadedPersonas);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const { width } = Dimensions.get("window");

  return (
    <ScrollView>
    <View style={styles.container}>
      <Image
        source={require("../../../assets/imgs/cabecalho-removebg-preview.png")}
        style={styles.imgStyle}
      />
      <FlatList
        data={characters}
        horizontal
        decelerationRate={"fast"}
        pagingEnabled
        style={{
          maxWidth: 350,
          height: width / 2.6,
        }}
        renderItem={({ item }) => (
          <CharacterView
            character={item}
            onPress={(character: Character) => { navigate("CharacterScreen", {character})}}
          />
        )}
      />
      <Pressable style={styles.btnStyle} onPress={() => { navigate(StatusScreen)}}>
        <Text style={styles.btnTextStyle}>Criar Ficha</Text>
      </Pressable>

      <Pressable
        style={styles.btnStyle}
        onPress={async () => {
          await AsyncStorage.clear();
        }}
      >
        <Text style={styles.btnTextStyle}>Flush</Text>
      </Pressable>

      <Pressable
        style={styles.btnStyle}
        onPress={() => {
          navigate(CreatingPersona);
        }}
      >
        <Text style={styles.btnTextStyle}>Criar persona</Text>
      </Pressable>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#084d6e",
  },
  btnStyle: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "20%",
    height: "12%",
    backgroundColor: "#FDED00",
    margin: 25,
  },
  btnTextStyle: {
    fontWeight: "bold",
    color: "black",
  },
  imgStyle: {},
  scrollStyle: {
    maxWidth: 350,
  },
});