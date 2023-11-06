import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function LifeAndEnergyInput({update,placeholder}:Props) {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputsStyle}
        placeholder={placeholder}
        inputMode="numeric"
        onChangeText={(lifePoints) =>  update(Number(lifePoints))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputsStyle: {
    width: '35%',
    height: 20,
    borderWidth: 2,
    textAlign: "center",
    margin: 10,
    borderColor: "black",
  },
  container: {
    flex: 1,
    alignItems: 'center',
  }
});

type Props = {
  update(value:any): void;
  placeholder:string
};
