import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Persona } from "../../model/persona/Persona";
import ThemedCard from "@rneui/themed/dist/Card";
import { Image } from "react-native-elements";
import RenderMagTypes from "../../components/magTypes/RenderMagTypes";

type Props = {
  persona: Persona;
};
export default function PersonaInformation(props: Props) {
  return (
    <View style={styles.container}>
      <ThemedCard>
        <Image
          style={styles.imgStyle}
          source={require("../../../assets/imgs/persona.jpg")}
        />
        <Text>{props.persona.name}</Text>
        <Text>Level :{props.persona.personaLevel}</Text>
        <Text>Pontos de Magia: {props.persona.pm}</Text>
        <Text>Convicção: {props.persona.conviction}</Text>
        <Text>Habilidade Natural: {props.persona.naturalSkill}</Text>
        <RenderMagTypes types={props.persona.magTypes}/>
      </ThemedCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgStyle: {
    width: 200,
    height: 200,
    // borderRadius: 100,
  },
});
