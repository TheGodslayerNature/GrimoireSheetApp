import { View, Text, FlatList, Pressable } from "react-native";
import { ListItem } from "@rneui/themed";
import React, { useState } from "react";
import { Character } from "../../model/character/Character";
import Accordion from "./Accordion";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ListMagics({ character }: Props) {
  const [expadedItems, setExpandeItems] = useState([] as string[]);

  return (
    <View>
      <FlatList
        data={character.persona[0].magDeck}
        renderItem={({ item, index }) => (
          <ListItem.Accordion
            key={index}
            content={
              <>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
              </>
            }
            isExpanded={expadedItems.includes(item.name)}
            onPress={() => {
              if (expadedItems.includes(item.name)) {
                setExpandeItems(expadedItems.filter((i) => i !== item.name));
                console.log(expadedItems.filter((i) => i != item.name));
              } else {
                setExpandeItems([...expadedItems, item.name]);
              }
            }}
          >
            {
              <ListItem key={index}>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                  <ListItem.Subtitle>{item.categoria}</ListItem.Subtitle>
                  <Text>Dano: {item.damage}</Text>
                  <Pressable
                    onPress={() => {
                      character.persona[0].magDeck.forEach((it, i) => { if( it === item){character.persona[0].magDeck.splice(i, 1) }})

                      AsyncStorage.setItem(character.user.userName,JSON.stringify(character));
                    }}
                  >
                    <Text>Retirar</Text>
                  </Pressable>
                </ListItem.Content>
              </ListItem>
            }
          </ListItem.Accordion>
        )}
      />
    </View>
  );
}

type Props = {
  character: Character;
};
