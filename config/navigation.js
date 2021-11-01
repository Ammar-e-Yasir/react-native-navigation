import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HelloWorld from '../screens/helloworld';
// import HomeScreen from '../screens/scree-two';

const Stack = createNativeStackNavigator();
export default function RouteNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='hello' component={HelloWorld}  />
                {/* <Stack.Screen name='screentwo' component={HomeScreen}  /> */}
            
            </Stack.Navigator>

        </NavigationContainer>
    );
}

export{Stack,createNativeStackNavigator,NavigationContainer}