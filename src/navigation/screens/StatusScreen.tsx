import { SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
  Pressable,} from 'react-native'
import React, { useState } from "react";
import StatusPoints from "../../components/statusPoints/statusPoints";
import { User, Status } from "../../components/user/User";

const STATUS = [
  Status.FOR,
  Status.TEC,
  Status.VIT,
  Status.MAG,
  Status.AGI,
  Status.SOR,
];

export default function StatusScreen() {
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
        style={[{
          flexDirection: "row",
          justifyContent: 'space-between',
        }, ]}
      >
        <TextInput
          style={[
            styles.characterInput,]}
          placeholder="Nome do personagem"
          onChangeText={(name) => setUserName(name)}
        />

        <TextInput
          style={[styles.characterInput,{
            height: 20,
            borderWidth: 1.5,
          }]}
          placeholder="Nivel do personagem"
          inputMode="numeric"
          editable={String(userLevel).at(1)? false : true}
          onChangeText={(value) => setUserLevel(Number(value))}
        />

      </View>

      <View style={styles.ImageStyle}>


      </View>

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
        style={{
          borderWidth: 2.5,
          borderColor: 'red',
          borderRadius: 3,
          paddingRight: 40,
        }}
        >
          <Text style={{
            alignItems: 'center'
          }}>CRIAR PERSONAGEM</Text>
        </Pressable>

    </SafeAreaView>
  
  )
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
    width: "50%",
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
  ImageStyle: {
    
  }
})
