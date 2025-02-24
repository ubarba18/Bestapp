import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Only one NavigationContainer
import { createStackNavigator } from '@react-navigation/stack';
import Index from './index';  // Import your Index screen
import Game from './game';    // Import your Game screen

const Stack = createStackNavigator();

export default function App() {
  return (
   
      <Stack.Navigator screenOptions={{
        headerShown: false
      }} >
        <Stack.Screen name="Home" component={Index} />
        <Stack.Screen name="Game" component={Game} />
      </Stack.Navigator>
  
  );
}
