import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity,StatusBar} from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import MultiSelect from 'react-native-multiple-select'

import StatusPoints from './src/components/statusPoints/statusPoints';

export default function App() {
  const [userLevel, setUserLevel] = useState(0);
  const [userName, setUserName] = useState("");

    var classes;

    classes = [{name: "Carta Coringa"}, {name: "Emergente"}, {name: "Supressor"}, {name: "Tocha"}, {name: "Sombra"}]

    var valor = 0;

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

    <MultiSelect
    selectText='Escolha a classe'
    onSelectedItemsChange={(item) => (item)}
    items={classes}
    />


    <StatusPoints
    statusName="FOR"
    points={valor}
    setPoints={(value: Number)  =>  valor += Number(value)}
    />
    <StatusPoints
    statusName="TEC"
    setPoints={(value: Number)  =>  valor += Number(value)}
    />
    <StatusPoints
    statusName="MAG"
    />
    <StatusPoints
    statusName="AGI"
    />  
    <StatusPoints
    statusName="SOR"
    />

    <Text>Quantidade de pontos adicionadas = {valor}</Text>

    <TouchableOpacity style={styles.btn}
    onPress={() => console.log(valor)}
    >
    <Text>Adicinar Pontos</Text>

    </TouchableOpacity>
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
