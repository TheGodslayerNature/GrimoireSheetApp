import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function ModifyPersona(props: any) {
  const { persona } = props.route.params;
  const { character } = props.route.params;
  
  return (
    <View style={styles.container}>
      <Pressable onPress={() => {console.log(persona); console.log(character)}}>
        <Text>Aperte</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#084d6e",
  }
})
