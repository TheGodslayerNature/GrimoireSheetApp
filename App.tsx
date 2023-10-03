import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import MainContainer from "./src/navigation/MainContainer";

const stack = createNativeStackNavigator();
export default function App() {
  return (
    <MainContainer></MainContainer>
  );
}
