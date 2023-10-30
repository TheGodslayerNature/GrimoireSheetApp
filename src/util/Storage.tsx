import AsyncStorage from "@react-native-async-storage/async-storage";
import { Character } from "../model/character/Character";


export const saveCharacter = async (character:Character) => {
    const ids = await AsyncStorage.getItem('characters');
    let loadedIds: string[] = ids ? JSON.parse(ids) : [];
    loadedIds.push(character.user.getName());

    await AsyncStorage.multiSet([
      ['characters', JSON.stringify(loadedIds)],
      [character.user.getName(), JSON.stringify(character)]
    ])

    return loadedIds;

    // AsyncStorage.getItem("characters").then((ids) => {
    //     let characters = ids ? (JSON.parse(ids!) as Array<string>) : [];
    //     characters.push(character.user.userName);
    //     console.log(characters);

    //     AsyncStorage.multiSet([
    //       ["characters", JSON.stringify(characters)],
    //       [character.user.getName(), JSON.stringify(character)],
    //     ]).then(() => console.log("saved!!"));
    //   });
}

export const getCharacter = async (key:string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value!);
  } catch(err) {
    console.log(err)
  }
}