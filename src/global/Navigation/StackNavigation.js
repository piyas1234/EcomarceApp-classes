

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import CateGoryScreen from '../../screens/CateGoryScreen';
import DrawerNavigator from './DrawerNavigator';
import {   Text, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native-elements/dist/header/Header';
import { Icon } from 'react-native-elements';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-view';
const Stack = createStackNavigator();
 
function StackNavigator() {

     const navigation = useNavigation()
  return (
    <SafeAreaProvider>
       
 
    <Stack.Navigator headerMode={'none'}    initialRouteName="HomeScreen">
      <Stack.Screen   name="HomeScreen" component={HomeScreen} />
      <Stack.Screen  name="CateGoryScreen" component={CateGoryScreen} />
      <Stack.Screen  name="DrawerNavigator" component={DrawerNavigator} />
    </Stack.Navigator>
    </SafeAreaProvider>
  );
}


export default StackNavigator;