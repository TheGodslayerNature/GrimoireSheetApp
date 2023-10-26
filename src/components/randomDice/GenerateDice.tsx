import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native-elements";

export default function GenerateDice(props: any) {
  const [diceType, setDiceType] = useState<number>(6);
  // let testD6 = (quantidadeDeVezes: number) => {
  //   const min = 1;
  //   const max = 6;
  //   for (let i = 0; i < quantidadeDeVezes; i++) {
  //     const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  //     let str = randomNumber.toString();
  //     console.log("valor: " + str + "\n");
  //   }
  // };

  let generateNumber = (dice:number, quantidadeDeVezes:number) => {
    const min = 1;
    const max = dice;
    let str = "";
    for(let i = 0; i < quantidadeDeVezes; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      str = str + "roll " + randomNumber.toString() + ", ";
    }
    console.log("valor: " + str + "\n");
  }

  // let testD4 = (quantidadeDeVezes: number) => {
  //   const min = 1;
  //   const max = 4;
  //   let str = "";
  //   for (let i = 0; i < quantidadeDeVezes; i++) {
  //     const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  //     str = randomNumber.toString();
  //     console.log("valor: " + str + "\n");
  //   }
  // };

  return (
    <View style={{ alignItems: 'center'}}>
      <View style={styles.btnView}>
      {/* <Pressable style={styles.btn} onPress={() => {
        setDiceType(4);
      }}>
        <Text>D4</Text>
      </Pressable>
      <Pressable style={styles.btn} onPress={() => {
        setDiceType(6)
      }}>
        <Text>D6</Text>
      </Pressable> */}
      </View>

      <View style={styles.atributosView}>
      <Pressable
      style={styles.btnAtt}
      onPress={() => { generateNumber(props.diceType! ,props.numberToRoll)}}
      >
        <Text>{props.numberToRoll}</Text>
        <Text>--</Text>
        <Text>{props.attType}</Text>
      </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    margin: 20,
    width: 100,
    borderColor: "#FDED00",
    borderWidth: 5,
    borderRadius: 16,
    alignItems: 'center'
  },
  btnAtt: {
    borderWidth: 3, 
    borderColor: 'black',
    borderRadius: 20,
    width: 50,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnView: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  atributosView: {
    flexDirection: 'column',
    marginTop: 20,
  }
});
