import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native-elements";

export default function GenerateDice(props: any) {
  const [diceType, setDiceType] = useState<number>();
  let str;

  let testD6 = (quantidadeDeVezes: number) => {
    const min = 1;
    const max = 6;
    for (let i = 0; i < quantidadeDeVezes; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      let str = randomNumber.toString();
      console.log("valor: " + str + "\n");
    }
  };

  let generateNumber = (dice:number, quantidadeDeVezes:number) => {
    for(let i = 0; i < quantidadeDeVezes; i++) {
      const randomNumber = Math.floor(Math.random() * (dice - 1 + 1)) + 1;
      let str = randomNumber.toString();
      console.log("valor: " + str + "\n");
    }
  }

  let testD4 = (quantidadeDeVezes: number) => {
    const min = 1;
    const max = 4;
    let str = "";
    for (let i = 0; i < quantidadeDeVezes; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      str = randomNumber.toString();
      console.log("valor: " + str + "\n");
    }
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <Pressable style={{ borderWidth: 2, borderColor: "red" }} onPress={() => {
        setDiceType(4);
      }}>
        <Text>D4</Text>
      </Pressable>
      <Pressable style={{ borderWidth: 2, borderColor: "red" }} onPress={() => {
        setDiceType(6)
      }}>
        <Text>D6</Text>
      </Pressable>
      <Pressable
      onPress={() => { generateNumber(diceType! ,props.numberToRoll)}}
      >
        <Text>{props.numberToRoll}</Text>
      </Pressable>
      {/* <Pressable
        style={styles.btn}
        onPress={() => {
          testD6(props.numberToRoll);
        }}
      >
        <Text>{props.numberToRoll} d6</Text>
      </Pressable>

      <Pressable style={styles.btn} onPress={() => testD4(props.numberToRoll)}>
        <Text>{props.numberToRoll} d4</Text>
      </Pressable>

      <Text>{"valores do d6: " + ""}</Text>

      <Text>{"valores do d4: " + ""}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    margin: 10,
    width: 100,
    borderColor: "#FDED00",
    borderWidth: 5,
    borderRadius: 16,
  },
});
