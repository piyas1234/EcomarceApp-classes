import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from './Login';
import SignUp from './SignUp';
import { DataManger } from '../../global/Context/Context';
 
import CateGoryList from './CateGoryList';
import BrandList from './BrandList';
import ProductsList from './ProductsList';

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
            <Tab.Screen name="CateGoryList" component={CateGoryList} />
            <Tab.Screen name="BrandList" component={BrandList} />
            <Tab.Screen name="ProductsList" component={ProductsList} />
        </Tab.Navigator>
   )
}

export default AuthScreen

const styles = StyleSheet.create({})
