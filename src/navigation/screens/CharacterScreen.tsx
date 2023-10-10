import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Arcanas } from "../../components/character/Arcanas";
import { Character } from "../../components/character/Character";
import {
  CharacterClass,
  Klass,
} from "../../components/character/CharacterClass";
import CharacterView from "../../components/characters/Characters";
import { Mag, MagType } from "../../components/mag/Mag";
import { Persona } from "../../components/persona/Persona";
import { Player } from "../../components/player/Player";
import { User } from "../../components/user/UserStatus";
import personagensData from "../../data/personagens.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

var valoresDoJson = personagensData[0];

const player: Player = new Player(
  valoresDoJson.player.email,
  valoresDoJson.player.password
);

const klass: CharacterClass = new CharacterClass(Klass.JOKER);
var kaleesi: User = new User(
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
      {characters.map((character, i) => (
        <li key={i}>
          <CharacterView character={character} />
        </li>
      ))}
      <Pressable
        style={styles.btnStyle}
        onPress={() => {
          navigation.navigate("Status");
        }}
      >
        <Text style={styles.btnTextStyle}>Criar Ficha</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
  btnStyle: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "20%",
    height: "12%",
    backgroundColor: "#E1D200",
  },
  btnTextStyle: {
    fontWeight: "bold",
    color: "#0066FF",
  },
  characterContainer: {
    flex: 1,
  },
  imgStyle: {
    height: 200,
    width: 150,
    resizeMode: "contain",
    borderWidth: 1.5,
    borderColor: "gold",
  },
});
