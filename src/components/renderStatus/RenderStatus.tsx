import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import AttributesView from "../attributesView/AttributesView";
import { Status } from "../../model/userAttributes/UserAttributes";

type Props = {
  submit: (stats: Array<number>) => void;
};

export default function RenderStatus(props: Props) {
  const [forca, setForca] = useState(0);
  const [tecnica, setTecnica] = useState(0);
  const [vitalidade, setVitalidade] = useState(0);
  const [magia, setMagia] = useState(0);
  const [agilidade, setAgilidade] = useState(0);
  const [sorte, setSorte] = useState(0);

  const STATUS = [
    { status: Status.FOR, update: setForca },
    { status: Status.TEC, update: setTecnica },
    { status: Status.VIT, update: setVitalidade },
    { status: Status.MAG, update: setMagia },
    { status: Status.AGI, update: setAgilidade },
    { status: Status.SOR, update: setSorte },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.attContainer}>
        <FlatList
          numColumns={Math.ceil(STATUS.length / 2)}
          data={STATUS}
          renderItem={({ item: { status, update } }) => (
            <AttributesView statusName={Status[status]} setPoints={update} />
          )}
        />
      </View>

      <View style={{alignItems: 'center', marginTop: 25, height: '60%'}}>
        <Pressable
          style={styles.btn}
          onPress={() =>
            props.submit([forca, tecnica, vitalidade, magia, agilidade, sorte])
          }
        >
          <Text style={styles.textStyle}>Adicionar Pontos</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#084d6e",
  },
  attContainer: {
    paddingTop: "10%",
    alignItems: "center",
  },
  btn: {
    height: "8%",
    width: "22%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FDED00",
    borderWidth: 2,
    borderColor: "black",
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 13,
  },
});
