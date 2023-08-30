import React ,{ useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View,StatusBar, Pressable, Image} from 'react-native';
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
    style={[styles.characterInput, {
      flexDirection: 'row',
    }]}
    placeholder='Nome do personagem'
    onChangeText={(name) => setUserName(name)}
    />

    <TextInput
    style={{
      justifyContent: 'center',
      alignItems: 'flex-start',
      borderWidth: 1.5,
      marginLeft: 0,
      marginBottom: 0,
      flexDirection: 'row'
    }}
    placeholder='Nivel do personagem'
    inputMode='numeric'
    onChangeText={(value) => setUserLevel(Number(value))}
    />

    <RNPickerSelect
    value={""}
    onValueChange={(value:String) => console.log(value)}
    items={[
      { label: 'Carta Coringa', value: '' },
      { label: 'Emergente', value: '' },
      { label: 'Supressor', value: '' },
      { label: "Tocha", value: ''},
      { label: "Sombra", value: ""}
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
    style={{
    borderWidth: 2,
    textAlign: 'auto',
    margin: 10,
    }}
    placeholder='Pontos de vida'
    />

    <TextInput
    style={{
    borderWidth: 2,
    textAlign: 'auto',
    margin: 10,
    }}
    placeholder='Pontos de Energia'
    />

    <TextInput
    style={{
    borderWidth: 2,
    textAlign: 'auto',
    margin: 10,
    }}
    placeholder='Pontos de Defesa'
    />

    {/* <Image source={require('./assets/imgs/hexagon.png')}
  style={styles.hexagonStyle}
  /> */}

{/* <View> */}

  
      {/* <View style={styles.topTriangle} />
      <View style={styles.rectangle}/>
      <View style={styles.bottomTriangle} /> */}
{/* </View> */}

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
    width: '50%',
    borderWidth: 2,
    textAlign: 'center',
    margin: 0,
    padding: 0,
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
  rectangle: {
    width: 200,
    height: 100,
    backgroundColor: '',
    borderWidth: 2
  },
  topTriangle: {
    borderLeftWidth: 200 / 2,
    borderLeftColor: 'transparent',
    borderRightWidth: 200 / 2,
    borderRightColor: 'transparent',
    borderBottomWidth: Math.round(200 * 0.57735) / 2,
    borderBottomColor: 'red',
  },
  bottomTriangle: {
    borderLeftWidth: 200 / 2,
    borderLeftColor: 'transparent',
    borderRightWidth: 200 / 2,
    borderRightColor: 'transparent',
    borderTopWidth: Math.round(200 * 0.57735) / 2,
    borderTopColor: 'red',
  },
  HexagonalInput: {
    
  },
  hexagonStyle: {
    height: "30%",
    alignItems: 'center',
  }
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
