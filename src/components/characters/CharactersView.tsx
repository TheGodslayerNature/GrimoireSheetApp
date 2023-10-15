import ThemedCard from '@rneui/themed/dist/Card';
import { Character } from 'components/character/Character';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function CharacterView(props: any) {
  let character = props.character as Character;

  return (
    <View style={styles.container}>
      <ThemedCard>
        <View >
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
          <View style={{flexDirection: 'row'}}>

          <Text>Nome: {character.user.userName + " "}</Text>
          <Text>Nível: {character.user.userLevel}</Text>
          </View>
          {/* <Text>Classe: {character.klass.name()}</Text> */}

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
  },
  imgStyle: {
    height: 200,
    width: 150,
    borderWidth: 1.5,
    borderColor: "gold",
  },
});
