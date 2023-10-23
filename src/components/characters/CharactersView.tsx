import ThemedCard from "@rneui/themed/dist/Card";
import { Character } from "components/character/Character";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

export default function CharacterView({character, onPress}: Props) {
  return (
    <View style={styles.container}>
      <ThemedCard>
      <Pressable
        onPress={() => {
          // props.onPress()
          onPress(character)
        }}
          style={{
            alignSelf: "flex-start"
          }}
        >
          <Icon name="add-user" type="entypo"/>
        </Pressable>
        <Pressable
          style={{
            alignSelf: "flex-start"
          }}
        >
          <Icon name="deleteuser" type="antdesign"/>
        </Pressable>
        <View>
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
          <View style={{ flexDirection: "row" }}>
            <Text>Nome: {character.user.userName + " "}</Text>
            <Text>Nível: {character.user.userLevel}</Text>
          </View>
          {/* <Text>Classe: {character.klass.name()}</Text> */}

          {/* {character.persona.map((pers) => (
            <li key={0}>
              Persona: {pers.name}; Nível: {pers.personaLevel}
            </li>
          ))} */}
        </View>
      </ThemedCard>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  imgStyle: {
    height: 200,
    width: 150,
    borderWidth: 1.5,
    borderColor: "gold",
  },
});

class Props {
  character: Character;
  onPress: (c: Character) => void;

  constructor(character: Character, onPress: (c: Character) => void) {
    this.character = character;
    this.onPress = onPress;
  }
}
