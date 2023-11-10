import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import ThemedCard from "@rneui/themed/dist/Card";
import { Persona } from "../../model/persona/Persona";
import { Icon } from "react-native-elements";

type Props = {
  persona: Persona;
  onPress: (persona:Persona) => void;
};

export default function PersonaView(props: Props) {
  return (
    <View>
      <ThemedCard>
        <View style={styles.personaView}>
          <Pressable
            style={styles.btn}
            onPress={() => {
              props.onPress(props.persona);
            }}
          >
            <Icon name="edit" type="antdesign"/>
          </Pressable>
          <Image
            style={styles.imgPortrait}
            source={require("../../../assets/imgs/persona.jpg")}
          />
          <Text>Nome: {props.persona.name}</Text>
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
  btn: {
    height: 20,
    width: 80,
    borderWidth: 1.2,
    borderColor: "black",
    backgroundColor: "#FDED00",
    alignItems: "center",
  },
});
