import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, View, } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style= {styles.container}>
    <StatusBar/>

    <TextInput
    style={styles.characterInput}
    placeholder='Nome do personagem'
    />

    <TextInput
    style={styles.characterInput}
    placeholder='Nivel do personagem'
    keyboardType='numeric'
    value={0}
    />

    <TextInput
    style={styles.statusPoints}
    placeholder='FOR'
    keyboardType='numeric'
    value={0}
    />

    <TextInput
    style={styles.statusPoints}
    placeholder='TEC'
    keyboardType='numeric'
    value={0}
    />

    <TextInput
    style={styles.statusPoints}
    placeholder='VIT'
    keyboardType='numeric'
    value={0}
    />

    <TextInput
    style={styles.statusPoints}
    placeholder='MAG'
    keyboardType='numeric'
    value={0}
    />

    <TextInput
    style={styles.statusPoints}
    placeholder='AGI'
    keyboardType='numeric'
    value={0}
    />

    <TextInput
    style={styles.statusPoints}
    placeholder='SOR'
    keyboardType='numeric'
    value={0}
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
    borderWidth: 2
  },
  statusPoints: {
    borderRadius: 4,
    borderWidth: 2,
  },
});
