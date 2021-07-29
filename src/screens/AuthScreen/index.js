import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from './Login';
import SignUp from './SignUp';
import { DataManger } from '../../global/Context/Context';
import Profile from './Profile';
import Setting from './Setting';
import DeshBoard from './DeshBoard';

const Tab = createMaterialTopTabNavigator();


const AuthScreen = () => {


    const {Auth} = useContext(DataManger)
    
    return Auth?.auth===false ? (
         <Tab.Navigator initialRouteName="Login">
             <Tab.Screen name="Login" component={Login} />
             <Tab.Screen name="SignUp" component={SignUp} />
         </Tab.Navigator>
    ):
    (
        <Tab.Navigator  >
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Setting" component={Setting} />
            <Tab.Screen name="Deshboard" component={DeshBoard} />
        </Tab.Navigator>
   )
}

export default AuthScreen

const styles = StyleSheet.create({})
