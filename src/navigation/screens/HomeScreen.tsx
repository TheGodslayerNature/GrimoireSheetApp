import React, { useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";

import { Character } from "../../model/character/Character";
import CharacterView from "../../components/characters/CharactersView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/MainNavigator";

/*
Paleta de cores

Azul petroleo: #084d6e

amarelo: #FDED00;
*/

interface Props
  extends NativeStackScreenProps<RootStackParamList, "HomeScreen"> {}

export default function HomeScreen({ navigation, route }: Props) {
  const [characters, setCharacters] = useState([] as Character[]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const value = await AsyncStorage.getItem("characters");
  //       let ids: string[] = value ? JSON.parse(value) : [];
  //       console.log(ids);
  //       let pairs = await AsyncStorage.multiGet(ids);
  //       let loadedChars: Character[] = pairs
  //         .filter((p) => p[1] != null)
  //         .map((p) => JSON.parse(p[1]!));
  //       console.log(loadedChars);
  //       setCharacters(loadedChars);
  //     } catch (error) {
  //       // Error retrieving data
  //       console.log(error);
  //     }
  //   })();
  // }, [characters]);

  useEffect(() => {
    (async () => {
      const characterIds = route.params?.characterIds;

      if (!characterIds) {
        const loadedIds = await AsyncStorage.getItem("characters");
        const parsedIds: string[] = loadedIds ? JSON.parse(loadedIds) : [];
        navigation.setParams({ characterIds: parsedIds });
      } else {
        let loadedCharacters = await loadCharacters(characterIds);
        setCharacters(loadedCharacters);
      }
    })();
  }, [route.params?.characterIds]);

  const loadCharacters = async (ids: string[]) => {
    let entries = await AsyncStorage.multiGet(ids);
    let loadedCharacters: Character[] = entries
      .filter(([_, char]) => char)
      .map(([_, char]) => JSON.parse(char!));
    return loadedCharacters;
  };

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
              onPress={(character: Character) => {
                navigation.navigate("CharacterScreen", { character });
              }}
            />
          )}
        />
        <Pressable
          style={styles.btnStyle}
          onPress={() => {
            navigation.navigate("StatusScreen");
          }}
        >
          <Text style={styles.btnTextStyle}>Criar Ficha</Text>
        </Pressable>

        <Pressable
          style={styles.btnStyle}
          onPress={async () => {
            await AsyncStorage.clear();
            navigation.setParams({characterIds: undefined})
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
