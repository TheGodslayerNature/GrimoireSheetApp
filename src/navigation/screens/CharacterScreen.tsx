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
import { User } from "../../components/user/User";
import { Arcanas } from "../../components/character/Arcanas";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Persona } from "../../components/persona/Persona";
import { Mag } from "../../components/mag/Mag";
import { Card } from "react-native-elements";

const player: Player = new Player("jj@gmail.com", "zetaman12");
const klass: CharacterClass = new CharacterClass(Klass.JOKER);
var kaleesi: User = new User("Kaleesi", 1);

const mags: Mag[] = [];
const persona: Persona = new Persona(
  "Jeane'darc",
  Arcanas.CHARIOT,
  "",
  "",
  6,
  mags
);

const lessi: Character = new Character(kaleesi, player, Arcanas.CHARIOT, klass);

{
  lessi.setPersona(persona);
  persona.setPersonaLevel(1);
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

      <View style={styles.characterContainer}>
        <Card>
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
        </Card>
      </View>
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
