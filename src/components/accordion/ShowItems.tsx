import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Character } from '../../model/character/Character'
import { ListItem } from '@rneui/themed'

type Props = {
    character:Character
}

//TODO: Refatorar os Accodions para Utilizar apenas um

export default function ShowItems({character}:Props) {
  const [expadedItems, setExpandeItems] = useState([] as string[]);

  return (
    <View>
       <View>
        <FlatList
          data={character.inventory}
          renderItem={({ item, index }) => (
            <ListItem.Accordion
              key={index}
              content={
                  <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                  </ListItem.Content>
              }
              isExpanded={expadedItems.includes(item.name)}
              onPress={() => {
                if (expadedItems.includes(item.name)) {
                    setExpandeItems(expadedItems.filter((i) => i !== item.name));
                    console.log(expadedItems.filter((i) => i != item.name))
                  } else {
                    setExpandeItems([...expadedItems, item.name]);
                  }
              }}
            >
              {
                <ListItem key={index}>
                  <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <Text>{item.effect}</Text>
                    {/* <Text>{item.rarity}</Text> */}
                    <Text>{item.cust}</Text>
                    <Pressable onPress={() => {
                      console.log(character)
                      character.inventory.forEach((tem, i) => {
                        if(tem === item){
                            character.inventory.splice(i,1)
                        }
                      });
                      // AsyncStorage.setItem();
                    }}><Text>Retirar</Text></Pressable>
                  </ListItem.Content>
                </ListItem>
              }
            </ListItem.Accordion>
          )}
        />
    </View>
    </View>
  )
}