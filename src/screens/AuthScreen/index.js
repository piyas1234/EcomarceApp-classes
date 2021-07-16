import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from './Login';
import SignUp from './SignUp';

const Tab = createMaterialTopTabNavigator();

const AuthScreen = () => {
    return (
         <Tab.Navigator initialRouteName="Login">
             <Tab.Screen name="Login" component={Login} />
             <Tab.Screen name="SignUp" component={SignUp} />
         </Tab.Navigator>
    )
}

export default AuthScreen

const styles = StyleSheet.create({})
