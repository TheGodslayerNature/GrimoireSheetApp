import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Status } from "../../../components/userStatus/UserStatus";
import GenerateDice from "../../../components/randomDice/GenerateDice";
import { Picker } from "@react-native-picker/picker";

export default function DificultyTest(props: any) {
  const { character } = props.route.params;
  const [indexValue, setIndexValue] = useState<number>();
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
      renderItem={({item, index}) => (
        // <Text>{item}</Text>
      <GenerateDice
        diceType={diceType}
        numberToRoll={character.user.statusPoints[index]}
        attType={Status[index]}
      />
      )}/>

      {/* {character.user.statusPoints.map((value: number, index: number) => (

      ))} */}
      {/* <GenerateDice
        numberToRoll={character.user.statusPoints[1]}
        attType={Status[1]}
      /> */}
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
