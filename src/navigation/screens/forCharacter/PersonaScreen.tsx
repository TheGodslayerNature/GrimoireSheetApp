import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import ThemedCard from "@rneui/themed/dist/Card";

export default function PersonaScreen(props: any) {
  const { character } = props.route.params;
  return (
    <View style={styles.container}>
      {character.persona.map((item:any, index:any) => (
        <ThemedCard>
          <View style={styles.personaView}>
            <Image
              style={styles.imgPortrait}
              source={require("../../../../assets/imgs/persona.jpg")}
            />
            <Text>{item.name}</Text>
            <Pressable onPress={() => props.navigation.navigate("PersonaStatus",{character: character})}><Text>Modificar</Text></Pressable>
            {/* <Text>{index}</Text> */}
          </View>
        </ThemedCard>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  personaView: {},
  imgPortrait: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
