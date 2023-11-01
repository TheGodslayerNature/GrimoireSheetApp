import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function LifeAndEnergyInput(props: any) {
  return (
    <View>
      <TextInput
        style={styles.inputsStyle}
        placeholder="Pontos de vida"
        onChangeText={(lifePoints) => props.updateLife(Number(lifePoints))}
      />

      <TextInput
        style={styles.inputsStyle}
        placeholder="Pontos de Energia"
        onChangeText={(energy) => props.updateEnergy(Number(energy))}
      />

      <TextInput
        style={styles.inputsStyle}
        placeholder="Pontos de aspectos"
        onChangeText={(aspect) => props.updateAspectPoint(Number(aspect))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputsStyle: {
    borderWidth: 2,
    textAlign: "center",
    margin: 10,
    borderColor: "black",
  },
});

type Props = {
  // update(value:any): void;
  life: number;
};
