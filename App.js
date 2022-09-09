import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchBox from './components/searchbox';
import Results from './components/results';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Search MixCloud' component={SearchBox}/>
        <Stack.Screen name='Search Results' component={Results}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
