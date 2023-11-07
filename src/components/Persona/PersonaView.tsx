import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import ThemedCard from "@rneui/themed/dist/Card";
import { Persona } from "../../model/persona/Persona";

// type Props = {
//   persona: Persona;
// };

export default function PersonaView(props: any) {
  return (
    <View>
      <ThemedCard>
        <View style={styles.personaView}>
          <Image
            style={styles.imgPortrait}
            source={require("../../../assets/imgs/persona.jpg")}
          />
          <Text>{props.persona.name}</Text>
          <Pressable
            onPress={() => {
                props.onPress(props.persona);
            }}
          >
            <Text>Modificar</Text>
          </Pressable>
        </View>
      </ThemedCard>
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
