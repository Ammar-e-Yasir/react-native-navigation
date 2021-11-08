import React from "react";
import {View , Text} from 'react-native'
export default function  Home({route,navigation}){
    // console.log(route.params)
    const {favFood,food} = route.params;
    return(
        <View>
            <Text>Home {favFood}{food}</Text>
            
        </View>
    )
}