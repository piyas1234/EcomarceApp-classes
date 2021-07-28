import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AuthScreen from '../../screens/AuthScreen';
import CartScreen from '../../screens/CartScreen';
import HomeScreen from '../../screens/HomeScreen';
import ProductDetailsScreen from '../../screens/ProductDetailsScreen/index';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DataManger} from '../Context/Context';
import {Avatar, Badge, Icon, withBadge} from 'react-native-elements';
import StackNavigator from './StackNavigation';
const BottomTabNav = () => {
  const Tab = createMaterialBottomTabNavigator();
  const {cart, setCart} = useContext(DataManger);
  const cartLength = cart.length;


  
  return (
    <NavigationContainer>
      <Tab.Navigator activeColor="tomato" barStyle={{backgroundColor: 'white'}}>
        <Tab.Screen
          name="Home"
          component={StackNavigator}
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
              <MaterialCommunityIcons name="details" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({color}) => (
              <>
                <Badge
                  status="error"
                  value={cartLength}
                  containerStyle={{position: 'absolute', top: -15, right: -10}}
                />
                <MaterialCommunityIcons
                  name="cart-outline"
                  color={color}
                  size={26}
                />
              </>
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
  );
};

export default BottomTabNav;

const styles = StyleSheet.create({});
