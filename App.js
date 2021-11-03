import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import RouteNavigation from './config/navigation';

export default function App() {
  return (
    <View>
      <RouteNavigation />
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
