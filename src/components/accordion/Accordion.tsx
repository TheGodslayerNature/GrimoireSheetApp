import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import { ListItem } from "@rneui/themed";
import { Mag, MagType } from "../../model/mag/Mag";
import magias from "../../model/mag/mags.json";
import { Character } from "../../model/character/Character";
import { saveCharacter } from "../../util/Storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Persona } from "../../model/persona/Persona";

let tier1: Mag[] = magias.physical.Tier1 as Mag[];

type Props = {
  persona: Persona;
  character: Character;
};

export default function Accordion({ character ,persona }: Props) {
  const [expadedItems, setExpandeItems] = useState([] as string[]);

  return (
    <View style={styles.container}>
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
                  <Text>Alcance: {item.alcance}</Text>
                  <Text>Efeito: {item.efeito}</Text>
                  <Text>Dano: {item.damage}</Text>
                  <Text>Descrição: {item.descricao}</Text>
                  <Pressable
                  style={styles.btn}
                  onPress={() => {
                    character.persona.forEach((pers) => {
                      if(pers.name == persona.name){
                        pers.magDeck.push(item)
                      }
                    })

                    AsyncStorage.setItem(character.user.userName, JSON.stringify(character));
                    console.log(character)
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
  container: {
    width: 300,
  },
  btn: {
    width: 90,
    height: 50,
    borderWidth: 2,
    borderColor: "black",
  },
});
