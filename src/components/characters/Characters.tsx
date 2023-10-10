import ThemedCard from '@rneui/themed/dist/Card';
import { Character } from 'components/character/Character';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function CharacterView(props: any) {
  let character = props.character as Character;

  return (
    <View style={styles.container}>
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

          <Text>Nome: {character.user.userName}</Text>
          <Text>Nível: {character.user.userLevel}</Text>
          {character.persona.map((pers) => (
            <li key={0}>
              Persona: {pers.name}; Nível: {pers.personaLevel}
            </li>
          ))}
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
