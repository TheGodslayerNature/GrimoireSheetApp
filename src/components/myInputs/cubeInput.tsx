import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

export default function cubeInput(props:any) {
  return (
    <View>
      <TextInput
        style={styles.inputStyle}
        placeholder="Nível"
        inputMode="numeric"
        onChangeText={(value) => props.update(Number(value))}
        maxLength={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    height: 50,
    width: 50,
    borderWidth: 2,
    marginLeft: "30%",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    // backgroundColor: "#FDED00",
    borderColor: "black",
  },
});
