import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import AlertModal from "../../components/modalForMagic/AlertModal";

export default function GenerateDice(props: any) {

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

  // { console.log(() => charac.getEnergy())}

  return (
    <View style={{ alignItems: 'center'}}>
      <View style={styles.btnView}>
      </View>

      <View style={styles.atributosView}>
      <Pressable
      style={styles.btnAtt}
      onPress={() => {  
        generateNumber(props.diceType! ,props.numberToRoll)}}
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
