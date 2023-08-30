import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function StatusPoints(props: any) {
  return (
    <View style={{paddingHorizontal: 10}}>
      <TextInput
        style={styles.statusPoints}
        inputMode="numeric"
        placeholder={props.statusName}
        onChangeText={(value) => props.setPoints(Number(value))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  statusPoints: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    borderWidth: 2,
    textAlign: "center",
  },
});
