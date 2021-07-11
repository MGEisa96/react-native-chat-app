import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/Home';
import Chat from '../../screens/Chat';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'Chat'} component={Chat} />
    </Stack.Navigator>
  );
}

export default HomeStack;
