import { View, Text, Image } from 'react-native'
import React from 'react'

export default function ImgTitle() {
  return (
    <View style={{flex:1,alignItems: 'center', alignContent: 'center',}}>
      <Image
        style={{maxWidth: "60%", alignItems: 'center', alignContent: 'center', alignSelf:'center'}}
        source={require("../../../assets/imgs/cabecalho-removebg-preview.png")}
      />
    </View>
  )
}