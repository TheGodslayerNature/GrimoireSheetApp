import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import * as Progress from "react-native-progress";

export default function bar({
  currentPoints,
  totalPoints,
  label,
  updatePoints,
  color,
}: BarProps) {
  return (
    <View style={{ flexDirection: "row" }}>
      <Pressable
        style={styles.btn}
        onPress={async () => updatePoints(currentPoints - 5)}
      >
        <Text>-5</Text>
      </Pressable>
      <Pressable
        style={styles.btn}
        onPress={async () => updatePoints(currentPoints - 1)}
      >
        <Text>-1</Text>
      </Pressable>
      <Progress.Bar
        progress={currentPoints / totalPoints}
        width={200}
        color={color} 
        style={{margin: 5}}
      >
        <Text style={styles.textStyle}>
          {label + ": " + currentPoints + " / " + totalPoints}
        </Text>
      </Progress.Bar>

      <Pressable
        style={styles.btn}
        onPress={async () => updatePoints(currentPoints + 1)}
      >
        <Text>+1</Text>
      </Pressable>
      <Pressable
        style={styles.btn}
        onPress={async () => updatePoints(currentPoints + 5)}
      >
        <Text>+5</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  btn: {
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "#FDED00",
    margin: "auto",
    width: 25,
    alignItems: "center",
  },
  textStyle: {
    textAlign: "center",
    fontSize: 14,
  },
});

type BarProps = {
  currentPoints: number;
  totalPoints: number;
  label: string;
  color: string;
  updatePoints: (value: number) => void;
};
