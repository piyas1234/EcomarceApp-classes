import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../../screens/HomeScreen';
import ProductDetailsScreen from '../../screens/ProductDetailsScreen';
import CartScreen from '../../screens/CartScreen';
import AuthScreen from '../../screens/AuthScreen';
import {NavigationContainer} from '@react-navigation/native';

const BottomTabNavigator = () => {

    const Tab = createMaterialBottomTabNavigator();

    return (
        <NavigationContainer>
            
          <Tab.Navigator
            initialRouteName="Feed"
            activeColor="tomato"
            barStyle={{backgroundColor: 'white'}}>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color}) => (
                  <AntDesign name="home" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="ProductDtails"
              component={ProductDetailsScreen}
              options={{
                tabBarLabel: 'Details',
                tabBarIcon: ({color}) => (
                  <MaterialCommunityIcons
                    name="details"
                    color={color}
                    size={26}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Cart"
              component={CartScreen}
              options={{
                tabBarLabel: 'Cart',
                tabBarIcon: ({color}) => (
                  <MaterialCommunityIcons
                    name="cart-outline"
                    color={color}
                    size={26}
                  />
                ),
              }}
            />

            <Tab.Screen
              name="Account"
              component={AuthScreen}
              options={{
                tabBarLabel: 'Account',
                tabBarIcon: ({color}) => (
                  <AntDesign name="user" color={color} size={26} />
                ),
              }}
            />
          </Tab.Navigator>
         
        </NavigationContainer>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})
