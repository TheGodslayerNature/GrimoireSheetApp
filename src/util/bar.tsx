import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import * as Progress from "react-native-progress";

export default function bar({
  currentPoints,
  totalPoints,
  label,
  updatePoints,
}: BarProps) {
  return (
    <View style={{ flexDirection: "row" }}>
      <Pressable
        style={styles.btn}
        onPress={() => updatePoints(currentPoints - 1)}
      >
        <Text>-1</Text>
      </Pressable>
      <Progress.Bar
        progress={currentPoints / totalPoints}
        width={200}
        style={{}}
      >
        <Text style={styles.textStyle}>{label + ": " + currentPoints + " / " + totalPoints}</Text>
      </Progress.Bar>
      <Pressable
        style={styles.btn}
        onPress={() => updatePoints(currentPoints + 1)}
      >
        <Text>+1</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  btn: {
    borderWidth: 5,
    borderColor: "#FDED00",
    margin: "auto",
  },
  textStyle: {
    textAlign: "center",
  },
});

type BarProps = {
  currentPoints: number;
  totalPoints: number;
  label: string;
  updatePoints: (point: number) => void;
}
