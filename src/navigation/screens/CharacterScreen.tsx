import React, { useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";

import { Arcanas } from "../../components/character/Arcanas";
import { Character } from "../../components/character/Character";
import { CharacterClass } from "../../components/character/CharacterClass2";
import CharacterView from "../../components/characters/Characters";
import { Mag, MagType } from "../../components/mag/Mag";
import { Persona } from "../../components/persona/Persona";
import { Player } from "../../components/player/Player";
import { UserStatus } from "../../components/user/UserStatus";
import personagensData from "../../data/personagens.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

/*
Paleta de cores

Azul petroleo: #084d6e

amarelo: #FDED00;


*/

var valoresDoJson = personagensData[0];

const player: Player = new Player(
  valoresDoJson.player.email,
  valoresDoJson.player.password
);
const klass: CharacterClass = CharacterClass.emergente();
var kaleesi: UserStatus = new UserStatus(
  valoresDoJson.userStatus.userName,
  valoresDoJson.userStatus.userLevel
);

const mags: Mag[] = [];
const persona: Persona = new Persona(
  valoresDoJson.character.persona[0].name,
  Arcanas.CHARIOT,
  "",
  "",
  6,
  valoresDoJson.character.persona[0].magDeck,
  MagType.BUFF
);

const lessi: Character = new Character(kaleesi, player, Arcanas.CHARIOT, klass);

{
  lessi.setPersona(persona);
  persona.setPersonaLevel(persona.getLevel());
}

export default function CharacterScreen({ navigation }: any) {
  const [characters, setCharacters] = useState([] as Character[]);

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

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/imgs/cabecalho-removebg-preview.png")}
        style={styles.imgStyle}
      />

      <View style={styles.scrollContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollStyle}
          horizontal={true}
          pagingEnabled={true}
          // centerContent={true}
        >
          {characters.map((character, i) => (
            <li key={i}>
              <CharacterView character={character} />
            </li>
          ))}
        </ScrollView>
      </View>

      <Pressable
        style={styles.btnStyle}
        onPress={() => {
          navigation.navigate("Status");
        }}
      >
        <Text style={styles.btnTextStyle}>Criar Ficha</Text>
      </Pressable>

      <View style={{ justifyContent: "flex-end" }}>
        <Pressable
          style={styles.btnStyle}
          onPress={async () => {
            await AsyncStorage.clear();
          }}
        >
          <Text style={styles.btnTextStyle}>Flush</Text>
        </Pressable>
      </View>
    </View>
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
  scrollContainer: {},
  imgStyle: {},
  scrollStyle: {
    maxWidth: 350,
  },
});
