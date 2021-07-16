import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from './src/screens/HomeScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import CartScreen from './src/screens/CartScreen';
import AuthScreen from './src/screens/AuthScreen';
import Context from './src/global/Context/Context';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <Context>
      <SafeAreaProvider>
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
      </SafeAreaProvider>
    </Context>
  );
};

export default App;

const styles = StyleSheet.create({});
