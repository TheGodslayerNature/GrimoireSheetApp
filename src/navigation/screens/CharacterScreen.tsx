import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Character } from "../../components/character/Character";
import { Player } from "../../components/player/Player";
import {
  CharacterClass,
  Klass,
} from "../../components/character/CharacterClass";
import { User } from "../../components/user/UserStatus";
import { Arcanas } from "../../components/character/Arcanas";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Persona } from "../../components/persona/Persona";
import { Mag, MagType } from "../../components/mag/Mag";
import { Card } from "@rneui/themed";
import personagensData from "../../data/personagens.json";
import MagTypes from "components/magTypes/MagTypes";
import ThemedCard from "@rneui/themed/dist/Card";

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

const characters: Character[] = [lessi];

export default function CharacterScream({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.btnStyle}
        onPress={() => {
          navigation.navigate("Status");
        }}
      >
        <Text style={styles.btnTextStyle}>Criar Ficha</Text>
      </Pressable>

      <ThemedCard>
        <View style={styles.characterContainer}>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../../../assets/imgs/anne.jpg")}
              style={styles.imgStyle}
            />
            <Image
              style={styles.imgStyle}
              source={require("../../../assets/imgs/persona.jpg")}
            />
          </View>

          <Text>Nome: {lessi.user.getName()}</Text>
          <Text>Nível: {lessi.user.getLevel()}</Text>
          {lessi.getPersona().map(
            (pers) => (
              lessi.setPersona(persona),
              (
                <Text>
                  Persona : {pers.name}; Nível: {pers.getLevel()}
                </Text>
              )
            )
          )}
        </View>
      </ThemedCard>
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
