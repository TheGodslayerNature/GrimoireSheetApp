import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Status } from "../../../model/userAttributes/UserAttributes";
import GenerateDice from "../../../components/randomDice/GenerateDice";

export default function DificultyTest(props: any) {
  const { character } = props.route.params;
  const [diceType, setDiceType] = useState<number>(6);

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
