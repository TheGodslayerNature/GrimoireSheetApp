import { View, Text, StyleSheet, Image, Pressable, FlatList } from "react-native";
import React from "react";
import ThemedCard from "@rneui/themed/dist/Card";
import { Persona } from "../../../model/persona/Persona";
import PersonaView from "../../../components/Persona/PersonaView";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/MainNavigator";

interface Props
  extends NativeStackScreenProps<RootStackParamList, "PersonasEdit"> {}

export default function PersonasEdit(props:any) {
  const { character } = props.route.params;
  return (
    <View style={styles.container}>
      <FlatList
      data={character.persona}
      renderItem={({item}) => (
        <PersonaView persona={item}
        onPress={ (persona:Persona) => {
              props.navigation.navigate("PersonaScreen", { persona, character});
        }}
        />
      )}
      />
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
