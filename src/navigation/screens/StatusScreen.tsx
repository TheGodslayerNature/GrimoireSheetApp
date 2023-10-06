import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import StatusPoints from "../../components/statusPoints/statusPoints";
import { User, Status } from "../../components/user/User";
import { Picker } from "@react-native-picker/picker";

const STATUS = [
  Status.FOR,
  Status.TEC,
  Status.VIT,
  Status.MAG,
  Status.AGI,
  Status.SOR,
];

const creatingPesonaScreen = "CreatingPersona";
const klasses:String[] = ["Carta-Coringa", "Emergente", "Sombra", "Supressor", "Tocha"];

export default function StatusScreen({ navigation }: any) {
  const [userLevel, setUserLevel] = useState(0);
  const [userName, setUserName] = useState("");

  const user: User = new User(userName, 2);

  let points = [0, 0, 0, 0, 0, 0];

  const submitPoints = () => {
    STATUS.forEach((status) => user.setPointsFor(status, points[status]));
    user.printStatusValues();
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <View
        style={[
          {
            flexDirection: "row",
          },
        ]}
      >
        <TextInput
          style={[styles.characterInput]}
          placeholder="Nome do personagem"
          onChangeText={(name) => setUserName(name)}
        />

        <TextInput
          style={[
            ,
            {
              height: 50,
              width: 50,
              borderWidth: 1.5,
              marginLeft: 50,
              alignContent: "center",
              alignItems: "center",
              textAlign: "center",
            },
          ]}
          placeholder="Nível"
          inputMode="numeric"
          editable={String(userLevel).at(1) ? false : true}
          onChangeText={(value) => setUserLevel(Number(value))}
        />
        
        <Picker style={{ width: 150, height: 50 }}>
          {klasses.map((kla) => (
            <Picker.Item key={0} value={""} label={kla.toString()} />
          ))}
        </Picker>

      </View>

      <View style={styles.ImageStyle}></View>

      <View style={{ flexDirection: "row", padding: 15 }}>
        {STATUS.map((status) => (
          <StatusPoints
            statusName={Status[status]}
            setPoints={(value: number) => (points[status] = value)}
          />
        ))}
      </View>

      <Pressable style={styles.btn} onPress={submitPoints}>
        <Text>Adicionar Pontos</Text>
      </Pressable>

      <TextInput
        style={{
          borderWidth: 2,
          textAlign: "auto",
          margin: 10,
        }}
        placeholder="Pontos de vida"
      />

      <TextInput
        style={{
          borderWidth: 2,
          textAlign: "auto",
          margin: 10,
        }}
        placeholder="Pontos de Energia"
      />

      <Pressable
        onPress={() => navigation.navigate("CreatingPersona")}
        style={{
          borderWidth: 2.5,
          borderColor: "gold",
          borderRadius: 20,
          paddingRight: 40,
          marginTop: 20,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            margin: 15,
          }}
        >
          CRIAR PERSONAGEM
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  characterInput: {
    height: 50,
    width: "80%",
    borderWidth: 2,
    textAlign: "center",
  },
  statusPoints: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    borderWidth: 2,
    textAlign: "center",
  },
  btn: {
    height: 50,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "black",
    margin: 10,
  },
  ImageStyle: {},
});
