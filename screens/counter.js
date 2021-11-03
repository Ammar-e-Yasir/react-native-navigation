// import React from "react";
// import { View,Text } from "react-native";


// export default function  ScreenTwo(){
//     return(
//     <View>
//         <Text> Hello World !</Text>
//     </View>
//     )
// }

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Counter({ navigation }) {
  return (
    <View>
    <Text>Hello Counter </Text>
      <TouchableOpacity onPress={()=>{
        navigation.navigate("hello")
      }}>
      <Text>Come back to hello World</Text>

      </TouchableOpacity>
     
    </View>
  );
}

// ... other code from the previous section