import React from 'react';
import {View,Text,Pressable} from 'react-native';
import {HomeStackScreenProps} from '../../navigations/types.ts';


const HomeScreen = ({route,navigation}:HomeStackScreenProps<"Home">) => {
  return <View style={{flex:1,justifyContent:'center'}}>
    <Text>Home</Text>
    <Pressable onPress={()=>navigation.navigate('Details',{
      detailsId:"123"
    })}>
      <Text>Go To Detals</Text>
    </Pressable>
    <Pressable onPress={()=>navigation.navigate('Counter')}>
      <Text>Counter Screen</Text>
    </Pressable>
  </View>
}

export default HomeScreen;
