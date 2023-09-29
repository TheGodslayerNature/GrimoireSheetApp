import { Pressable, StyleSheet, Text,} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScream from "./src/screams/HomeScream";
import StatusScream from "./src/screams/StatusScream";
import CharacterScream from "./src/screams/CharacterScream";

const stack = createNativeStackNavigator();
export default function App() {
  return (

    //Arumar uma forma das screans aparecerem no canto superior ou inferior

    <NavigationContainer>
      <stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: "gold",
      }}
      >
        <stack.Screen
        name="Home"
        component={HomeScream}
        options={{
          title: 'Home',
          headerRight: () => <Pressable
          //onPress={} 
          style={{ borderWidth:1,backgroundColor: 'gold', margin: 10, height: 25, alignContent: 'center'}}>
            <Text>Characters</Text>
            </Pressable>
      }}
        />
        <stack.Screen
        name="StatusScream"
        component={StatusScream}
        options={{ title: 'Status'}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
