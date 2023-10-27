import {
  View,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import ModalForMagic from "../../../components/modalForMagic/ModalForMagic";

//Usar Accordion para o drop

export default function BuyMagic() {
  return (
    <View style={styles.container}>

      <ModalForMagic/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  addBtn: {
    marginLeft: 60,
    height: 20,
    width: 80,
    backgroundColor: "#FDED00",
    borderWidth: 2,
    borderRadius: 5,
  },
});
