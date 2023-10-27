import { View, Text, TextInput } from "react-native";
import React from "react";

export default function LifeAndEnergyInput(props:any) {
  return (
    <View>
      <TextInput
        style={{
          borderWidth: 2,
          textAlign: "center",
          margin: 10,
          borderColor: "#FDED00",
        }}
        placeholder="Pontos de vida"
        onChangeText={(lifePoints) => props.updateLife(Number(lifePoints))}
      />

      <TextInput
        style={{
          borderWidth: 2,
          textAlign: "center",
          margin: 10,
          borderColor: "#FDED00",
        }}
        placeholder="Pontos de Energia"
        onChangeText={(energy) => props.updateEnergy(Number(energy))}
      />
    </View>
  );
}

type Props = {
    // update(value:any): void;
    life:number;
}
