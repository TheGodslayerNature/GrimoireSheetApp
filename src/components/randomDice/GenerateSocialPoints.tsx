import { View, Text, Pressable } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

export default function GenerateSocialPoints(props: any) {
  return (
    <View style={styles.container}>
         <View style={styles.atributosView}>
      <Pressable style={styles.btn}>
        <Text>{props.value}</Text>
        <Text>-</Text>
        <Text>{props.socialName}</Text>
      </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  btn: {
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 20,
    width: 120,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 40,
  },
  atributosView: {
    flexDirection: 'column',
    marginTop: 20,
  }
});
