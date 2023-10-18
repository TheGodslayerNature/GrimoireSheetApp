import AsyncStorage from "@react-native-async-storage/async-storage";
import { Character } from "../components/character/Character";


export const saveCharacter = (character:Character) => {
    AsyncStorage.getItem("characters").then((ids) => {
        let characters = ids ? (JSON.parse(ids!) as Array<string>) : [];
        characters.push(character.user.userName);
        console.log(characters);

        AsyncStorage.multiSet([
          ["characters", JSON.stringify(characters)],
          [character.user.getName(), JSON.stringify(character)],
        ]).then(() => console.log("saved!!"));
      });
}