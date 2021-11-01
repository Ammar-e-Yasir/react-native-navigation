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
import { Button, View, Text } from 'react-native';
import { NavigationContainer, createNativeStackNavigator,Stack } from '../config/navigation';
import { createNativeStackNavigator } from '../config/navigation';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="screentwo"
        onPress={() => navigation.navigate('screentwo')}
      />
    </View>
  );
}

// ... other code from the previous section