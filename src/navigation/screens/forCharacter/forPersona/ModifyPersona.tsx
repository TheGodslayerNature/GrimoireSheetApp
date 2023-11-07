import { View, Text, Pressable } from "react-native";
import React from "react";

export default function ModifyPersona(props: any) {
  const { character } = props.route.params;
  
  return (
    <View>
      <Pressable onPress={() => console.log(character)}>
        <Text>Aperte</Text>
      </Pressable>
    </View>
  );
}
