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

/*
Paleta de cores

Azul petroleo: #084d6e

amarelo: #FDED00;
*/

var valoresDoJson = personagensData[0];

export default function CharacterScreen({ navigation }: any) {
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
    <View style={styles.container}>
      <Image
        source={require("../../../assets/imgs/cabecalho-removebg-preview.png")}
        style={styles.imgStyle}
      />

      {/* <View style={styles.scrollContainer}> */}
      {/* <ScrollView */}
      {/* contentContainerStyle={styles.scrollStyle} */}
      {/* horizontal */}
      {/* pagingEnabled={true} */}
      {/* // centerContent={true} */}
      {/* > */}
      {/* <FlatList */}
      {/* data={characters} */}
      {/* renderItem={({ item }) => <CharacterView character={item} />} */}
      {/* /> */}
      {/* {characters.map((character, i) => (
            <li key={i}>
              <CharacterView character={character} />
            </li>
          ))}  */}
      {/* </ScrollView> */}
      {/* </View> */}

      {/* <SectionList
      contentContainerStyle={{paddingHorizontal: 10}}
      stickySectionHeadersEnabled={false}
      sections={dummyCharacter}
      renderItem={({item}) => {
        return <CharacterView character={item}/>
      }}
      />     */}
      <FlatList
        data={characters}
        horizontal
        //snapToOffsets={[...Array(characters.length)].map((x, i) => i * (width*0.8-40) + (i)*40)}
        snapToAlignment="start"
        scrollEventThrottle={16}
        decelerationRate={"fast"}
        pagingEnabled
        style={{
          maxWidth: 350,
          height: width / 2.6,
        }}
        renderItem={({ item }) => (
          <CharacterView character={item} navi={navigation} onPress={() => navigation.navigate("Character Status")}/>
        )}
      />
      <Pressable
        style={styles.btnStyle}
        onPress={() => {
          navigation.navigate("Status");
        }}
      >
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
          navigation.navigate("CreatingPersona");
        }}
      >
        <Text style={styles.btnTextStyle}>Criar persona</Text>
      </Pressable>
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
  imgStyle: {},
  scrollStyle: {
    maxWidth: 350,
  },
});
