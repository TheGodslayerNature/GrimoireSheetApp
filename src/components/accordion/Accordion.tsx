import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import { ListItem } from "@rneui/themed";
import { Mag, MagType } from "../../model/mag/Mag";
import magias from "../../model/mag/mags.json";
import { Character } from "../../model/character/Character";
import { saveCharacter } from "../../util/Storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

let tier1: Mag[] = magias.physical.Tier1 as Mag[];

type Props = {
  chrac: Character;
};

export default function Accordion({ chrac }: Props) {
  const [expadedItems, setExpandeItems] = useState([] as string[]);

  return (
    <View>
      <FlatList
        data={tier1}
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
            onPress={() => 
              {
              if (expadedItems.includes(item.name)) {
                setExpandeItems(expadedItems.filter((i) => i !== item.name));
                console.log(expadedItems.filter((i) => i != item.name))
              } else {
                setExpandeItems([...expadedItems, item.name]);
              }
            }
          }
          >
            {
              <ListItem key={index}>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                  <ListItem.Subtitle>{item.categoria}</ListItem.Subtitle>
                  <Text>Dano: {item.damage}</Text>
                  <Pressable
                  onPress={() => {

                    chrac.persona[0].magDeck.push(item);

                    AsyncStorage.setItem(chrac.user.userName, JSON.stringify(chrac));
                  }}
                  >
                    <Text>Adicionar</Text>
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

const styles = StyleSheet.create({
  btn: {
    width: 90,
    height: 50,
    borderWidth: 2,
    borderColor: "black",
  },
});
