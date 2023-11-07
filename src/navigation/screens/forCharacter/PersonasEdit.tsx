import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import ThemedCard from "@rneui/themed/dist/Card";
import { Persona } from "../../../model/persona/Persona";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/MainNavigator";

interface Props
  extends NativeStackScreenProps<RootStackParamList, "PersonasEdit"> {}

export default function PersonasEdit(props:any) {
  const { character } = props.route.params;
  return (
    <View style={styles.container}>
      {character.persona.map((item:Persona, index:any) => (
        <ThemedCard>
          <View style={styles.personaView}>
            <Image
              style={styles.imgPortrait}
              source={require("../../../../assets/imgs/persona.jpg")}
            />
            <Text>{item.name}</Text>
            <Pressable onPress={() => {
              let persona = item as Persona; 
              props.navigation.navigate('PersonaScreen', {persona})
              console.log(item)
              }}>
                <Text>Modificar</Text></Pressable>
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
