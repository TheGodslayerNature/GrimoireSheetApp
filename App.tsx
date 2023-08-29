import React ,{ useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View,StatusBar, Pressable} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import StatusPoints from './src/components/statusPoints/statusPoints';
import {User} from "./src/components/user/User";
import { Status} from './src/components/statusPoints/status';

export default function App() {
  const [userLevel, setUserLevel] = useState(0);
  const [userName, setUserName] = useState("");

    var classes;

    const status:Status = new Status();

    const user:User = new User(userName, "Carta Coringa", userLevel, status);

    classes = [{name: "Carta Coringa"}, {name: "Emergente"}, {name: "Supressor"}, {name: "Tocha"}, {name: "Sombra"}]


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
    setPoints={(value: Number)  =>  user.setPointsFor(Number(value))}
    />
    <StatusPoints
    statusName="TEC"
    setPoints={(value: Number)  =>   user.setPointsTec(Number(value))}
    />
    <StatusPoints
    statusName="VIT"
    setPoints={(value: Number)  =>   user.setPointsVit(Number(value))}
    />
    <StatusPoints
    statusName="MAG"
    setPoints={(value: Number)  =>   user.setPointsMag(Number(value))}
    />
    <StatusPoints
    statusName="AGI"
    setPoints={(value: Number)  =>   user.setPointsAgi(Number(value))}
    />  
    <StatusPoints
    statusName="SOR"
    setPoints={(value: Number)  =>   user.setPointsSor(Number(value))}
    />


    <Pressable style={styles.btn}
    onPress={() => user.printValues()}
    >
    <Text>Adicinar Pontos</Text>

    </Pressable>


    <TextInput
    placeholder='Pontos de vida'
    />

    <TextInput
    placeholder='Pontos de Energia'
    />

    <TextInput
    placeholder='Pontos de Defesa'
    />


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
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
