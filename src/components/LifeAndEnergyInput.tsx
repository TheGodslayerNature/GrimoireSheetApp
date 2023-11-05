import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function LifeAndEnergyInput(props: any) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputsStyle}
        placeholder="Pontos de vida"
        keyboardType="numeric"
  
        onChangeText={(lifePoints) => props.updateLife(Number(lifePoints))}
      />

      <TextInput
        style={styles.inputsStyle}
        placeholder="Pontos de Energia"
        keyboardType="numeric"
        onChangeText={(energy) => props.updateEnergy(Number(energy))}
      />

      <TextInput
        style={styles.inputsStyle}
        keyboardType="numeric"
        placeholder="Pontos de aspectos"
        onChangeText={(aspect) => props.updateAspectPoint(Number(aspect))}
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
  // update(value:any): void;
  life: number;
};
