import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import AttributesView from "../attributesView/AttributesView";
import {
  SocialPoints,
  Status,
} from "../../model/userAttributes/UserAttributes";

type Props = {
  submit: (stats: Array<number>) => void;
  submitSocial: (socials: Array<number>) => void
};

export default function RenderStatus(props: Props) {
  const [forca, setForca] = useState(0);
  const [tecnica, setTecnica] = useState(0);
  const [vitalidade, setVitalidade] = useState(0);
  const [magia, setMagia] = useState(0);
  const [agilidade, setAgilidade] = useState(0);
  const [sorte, setSorte] = useState(0);

  const [knowledge, setKnowledge] = useState(0);
  const [discipline, setDiscipline] = useState(0)
  const [expression, setExpression] = useState(0)
  const [charm, setCharm] = useState(0)
  const [empathy, setEmpathy] = useState(0)
  const [courage, setCourage] = useState(0)

  const STATUS = [
    { status: Status.FOR, update: setForca },
    { status: Status.TEC, update: setTecnica },
    { status: Status.VIT, update: setVitalidade },
    { status: Status.MAG, update: setMagia },
    { status: Status.AGI, update: setAgilidade },
    { status: Status.SOR, update: setSorte },
  ];

  const SOCIALS = [
    { socialPoints: SocialPoints.KNOWLEDGE, update: setKnowledge },
    { socialPoints: SocialPoints.DISCIPLINE, update: setDiscipline },
    { socialPoints: SocialPoints.EMPATHY, update: setExpression },
    { socialPoints: SocialPoints.CHARM, update: setCharm },
    { socialPoints: SocialPoints.EXPRESSION, update: setEmpathy },
    { socialPoints: SocialPoints.COURAGE, update: setCourage },
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

      <View style={{ alignItems: "center", marginTop: 25, height: "60%" }}>
        <Pressable
          style={styles.btn}
          onPress={() =>
            props.submit([forca, tecnica, vitalidade, magia, agilidade, sorte])
          }
        >
          <Text style={styles.textStyle}>Adicionar Pontos</Text>
        </Pressable>
      </View>

      <View style={styles.attContainer}>
        <FlatList
          numColumns={Math.ceil(SOCIALS.length / 2)}
          data={SOCIALS}
          renderItem={({ item:{ socialPoints, update } }) => (
            <AttributesView
              statusName={SocialPoints[socialPoints]}
              setPoints={update}
            />
          )}
        />
      </View>

      <View style={{ alignItems: "center", marginTop: 25, height: "60%" }}>
        <Pressable
          style={styles.btn}
          onPress={() =>
            props.submitSocial([knowledge, discipline, empathy, charm, expression, courage])
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
    width: "24%",
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
