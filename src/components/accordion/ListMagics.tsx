import { View, Text, FlatList } from 'react-native'
import { ListItem } from "@rneui/themed";
import React, { useState } from 'react'
import { Character } from '../../model/character/Character';

export default function ListMagics({character}:Props) {
    const [expanded, setExpanded] = useState(false);
    
  return (
    <View>
        <ListItem.Accordion
        content={
            <ListItem.Content>
                <ListItem.Title>
                    <FlatList
                    data={character.persona[0].magDeck}
                    renderItem={({item, index}) => (
                        <Text>{item.name}</Text>
                    )}
                    />
                </ListItem.Title>
            </ListItem.Content>
        }
        isExpanded={expanded}
        onPress={() => setExpanded(!expanded)}
        >
            {character.persona[0].magDeck.map((item, index) => (
                <ListItem.Content>
                    <ListItem.Title>{}</ListItem.Title>
                    <Text>Tier: {item.tier}</Text>
                    <Text>Categoria: {item.categoria}</Text>
                    <Text>Alcance: {item.alcance}</Text>
                    <Text>Categoria: {item.categoria}</Text>
                    <Text>Efeito: {item.efeito}</Text>
                </ListItem.Content>
            ))}            
        </ListItem.Accordion>
    </View>
  )
}

type Props = {
    character:Character;
}