import { StyleSheet,} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScream from "./src/screams/HomeScream";
import StatusScream from "./src/screams/StatusScream";

const stack = createNativeStackNavigator();
export default function App() {
  return (

    //Arumar uma forma das screans aparecerem no canto superior ou inferior

    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
        name="Home"
        component={HomeScream}
        options={{title: 'Home'}}
        />
        <stack.Screen
        name="Second"
        component={StatusScream}
        options={{title: 'SecondScream'}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
