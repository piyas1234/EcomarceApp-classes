

import { createStackNavigator } from '@react-navigation/stack';
import ProductsSceeen from '../../screens/ProductsSceeen';
import HomeScreen from '../../screens/HomeScreen';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import CateGoryScreen from '../../screens/CateGoryScreen';

const Stack = createStackNavigator();

function StackNavigator() {

     
  return (
    <Stack.Navigator headerMode={'none'}    initialRouteName="HomeScreen">
      <Stack.Screen   name="HomeScreen" component={HomeScreen} />
      <Stack.Screen  name="CateGoryScreen" component={CateGoryScreen} />
    </Stack.Navigator>
  );
}


export default StackNavigator;