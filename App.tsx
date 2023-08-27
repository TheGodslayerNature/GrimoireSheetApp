import React ,{ useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View,StatusBar, Pressable} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import StatusPoints from './src/components/statusPoints/statusPoints';
import User from "./src/components/user/User";

export default function App() {
  const [userLevel, setUserLevel] = useState(0);
  const [userName, setUserName] = useState("");

    var classes;

    const user:User = new User(userName, "Carta Coringa", 18, userLevel);


    classes = [{name: "Carta Coringa"}, {name: "Emergente"}, {name: "Supressor"}, {name: "Tocha"}, {name: "Sombra"}]

    var forPoints = 0;
    var tecPoints = 0;
    var vitPoints = 0;
    var magPoints = 0;
    var agiPoints = 0;
    var sorPoints = 0;

  return (

    <SafeAreaView style= {styles.container}>
    <StatusBar/>

    <TextInput
    style={styles.characterInput}
    placeholder='Nome do personagem'
    onChangeText={(name) => setUserName(name)}
    />

    <TextInput
    style={styles.characterInput}
    placeholder='Nivel do personagem'
    inputMode='numeric'
    onChangeText={(value) => setUserLevel(Number(value))}
    />

    <RNPickerSelect
    value={""}
    onValueChange={(value:String) => console.log(value)}
    items={[
      { label: 'Carta Coringa', value: 'Carta Coringa' },
      { label: 'Emergente', value: 'Emergente' },
      { label: 'Supressor', value: 'Supressor' },
      { label: "Tocha", value: 'Tocha'},
      { label: "Sombra", value: "Sombra"}
  ]}
    />


    <StatusPoints
    statusName="FOR"
    setPoints={(value: Number)  =>  forPoints += Number(value)}
    />
    <StatusPoints
    statusName="TEC"
    setPoints={(value: Number)  =>  tecPoints += Number(value)}
    />
    <StatusPoints
    statusName="VIT"
    setPoints={(value: Number)  =>  vitPoints += Number(value)}
    />
    <StatusPoints
    statusName="MAG"
    setPoints={(value: Number)  =>  magPoints += Number(value)}
    />
    <StatusPoints
    statusName="AGI"
    setPoints={(value: Number)  =>  agiPoints += Number(value)}
    />  
    <StatusPoints
    statusName="SOR"
    setPoints={(value: Number)  =>  sorPoints += Number(value)}
    />


    <Pressable style={styles.btn}
    onPress={() => console.log(`Os pontos ao apertar o botão são
    FOR = ${forPoints},\n
    TEC = ${tecPoints},\n
    VIT = ${vitPoints},\n
    MAG = ${magPoints},\n
    SOR = ${sorPoints}
    `)}
    >
    <Text>Adicinar Pontos</Text>

    </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  characterInput: {
    height: 50,
    width: '80%',
    borderWidth: 2,
    textAlign: 'center',
    margin: 10
  },
  statusPoints: {
    height: 50,
    width: 50,
    borderRadius: 50/2,
    borderWidth: 2,
    textAlign: 'center'
  },
  btn: {
    height: 50,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: "black",
    margin: 10
  }
});
