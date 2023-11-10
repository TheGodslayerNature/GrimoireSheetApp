import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import PersonaInformation from "../../../../components/Persona/PersonaInformation";

export default function ModifyPersona(props: any) {
  const { persona } = props.route.params;
  const { character } = props.route.params;
  
  return (
    <View style={styles.container}>
      <PersonaInformation persona={persona}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#084d6e",
  }
})
