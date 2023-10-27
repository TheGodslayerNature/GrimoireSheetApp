import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Status } from "../../../components/userStatus/UserStatus";
import GenerateDice from "../../../components/randomDice/GenerateDice";
import { Picker } from "@react-native-picker/picker";
import { Character } from "components/character/Character";
import { Persona } from "../../../components/persona/Persona";
import { Arcanas } from "../../../components/character/Arcanas";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DificultyTest(props: any) {
  const { character } = props.route.params;
  const [indexValue, setIndexValue] = useState<number>();
  const [diceType, setDiceType] = useState<number>(6);

  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem(character.user.userName);
        let ids = JSON.parse(value!) as Character;
        let persona:Persona = new Persona("jj", Arcanas.CHARIOT, "", "", 2);
        ids.persona.push(persona)
        console.log(ids);
      } catch (error) {
        // Error retrieving data
        console.log(error);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.btn}
        onPress={() => {
          setDiceType(4);
        }}
      >
        <Text>D4</Text>
      </Pressable>
      <Pressable
        style={styles.btn}
        onPress={() => {
          setDiceType(6);
        }}
      >
        <Text>D6</Text>
      </Pressable>

      <FlatList
        data={character.user.statusPoints}
        renderItem={({ item, index }) => (
          // <Text>{item}</Text>
          <GenerateDice
            diceType={diceType}
            numberToRoll={character.user.statusPoints[index]}
            attType={Status[index]}
            personagem={character}
          />
        )}
      />

      <Pressable style={styles.btn} onPress={() => {
        let persona:Persona = new Persona("jj", Arcanas.CHARIOT, "", "", 2);
        character.persona.push(persona);
        console.log(character)
      }}>
        <Text> add persona</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {},
  btn: {
    borderWidth: 2,
    borderColor: "red",
  },
});
