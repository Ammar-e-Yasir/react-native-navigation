import React from "react";
import { View,Text, TouchableOpacity } from "react-native";


export default function  HelloWorld({navigation}){
    return(
    <View>
        <Text>Hello World</Text>
        <TouchableOpacity onPress={()=>{
            navigation.navigate('Counter')
        }}>
            <Text>Counter</Text>
        </TouchableOpacity>
    </View>
    )
}