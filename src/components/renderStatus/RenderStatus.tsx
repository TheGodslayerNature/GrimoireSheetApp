import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import StatusPoints from "../statusPoints/statusPoints";
import { Status } from "../user/UserStatus";

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
      <View style={{ flexDirection: "row", padding: 15 }}>
        <FlatList
          numColumns={Math.ceil(STATUS.length / 2)}
          data={STATUS}
          renderItem={({ item: { status, update } }) => (
            <StatusPoints statusName={Status[status]} setPoints={update} />
          )}
        />
      </View>

      <Pressable
        style={styles.btn}
        onPress={() =>
          props.submit([forca, tecnica, vitalidade, magia, agilidade, sorte])
        }
      >
        <Text>Adicionar Pontos</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#084d6e",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    height: 50,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FDED00",
    margin: 10,
  },
});
