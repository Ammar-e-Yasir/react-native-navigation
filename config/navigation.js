// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HelloWorld from '../screens/helloworld';
// import Counter from '../screens/counter';

// const Stack = createNativeStackNavigator();
// export default function RouteNavigation() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name='hello' component={HelloWorld}  />
//                 <Stack.Screen name='counter' component={Counter}  />
            
//             </Stack.Navigator>

//         </NavigationContainer>
//     );
// }
import React from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HelloWorld from '../screens/helloworld';
import Counter from '../screens/counter';
import Home from '../screens/home';
import About from '../screens/about';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


function Food({navigation}){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('home',{favFood:'Biryani',food:'Dal chawal'})
                }}
                >
            <Text>Food</Text>

            </TouchableOpacity>
        </View>
    )
}

function SettingsScreen(){
    return (
        <View>
            <Text>Setting</Text>
        </View>
    )
}

export default function RouteNavigation() {
    return (
        <NavigationContainer>

            <Drawer.Navigator initialRouteName='food'>
                <Drawer.Screen name='home' component={Home}  />
                <Drawer.Screen name='settings' component={SettingsScreen} />
                <Drawer.Screen name='food' component={Food} />
            </Drawer.Navigator>
            {/* {
                false ? (
                    <Stack.Navigator>
                        <Stack.Screen name="hello" component={HelloWorld} />
                        <Stack.Screen name="Counter" component={Counter} />
                    </Stack.Navigator>
                ) : (
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;
                                if (route.name === 'home') {
                                    iconName = focused
                                        ? "glasses-outline"
                                        : 'ios-information-circle-outline';
                                } else if (route.name === 'about') {
                                    iconName = focused ? 'ios-list-box' : 'ios-list';
                                }

                                // You can return any component that you like here!
                                return <Ionicons name={iconName} size={size} color={color} />;
                            },
                            tabBarActiveTintColor: 'green',
                            tabBarInactiveTintColor: 'blue',
                        })}

                    >
                        <Tab.Screen name="home" component={Home} />
                        <Tab.Screen name="about" component={About} />
                    </Tab.Navigator>
                )
            } */}
        </NavigationContainer >

    )
}
