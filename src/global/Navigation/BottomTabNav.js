 
import React, {useContext} from 'react';
import { Text, TouchableOpacity } from 'react-native';
import AuthScreen from '../../screens/AuthScreen';
import ProductDetailsScreen from '../../screens/ProductDetailsScreen/index';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DataManger} from '../Context/Context';
import {Badge, Header, Icon} from 'react-native-elements';
import StackNavigator from './StackNavigation';
import ProductsSceeen from '../../screens/ProductsSceeen';
const BottomTabNav = ({navigation}) => {
  const Tab = createMaterialBottomTabNavigator();
  const {cart } = useContext(DataManger);
  const cartLength = cart.length;
  const {headerNavigator, DrawerNavigator} = useContext(DataManger);
  const onPressHandler = () => {
    headerNavigator.navigate('DrawerNavigator');
    DrawerNavigator?.toggleDrawer();
  };

  return (
    <>
      <Header
        placement="left"
        backgroundColor="#00d5ff"
        leftComponent={
          <TouchableOpacity onPress={() => onPressHandler()}>
            <Text>
              <Icon type="material" name="menu" color="white" />
            </Text>
          </TouchableOpacity>
        }
        centerComponent={{
          text: 'E SHOP BD',
          style: {color: '#fff', fontWeight: 'bold'},
        }}
        rightComponent={
          <TouchableOpacity
            onPress={() => headerNavigator.navigate('HomeScreen')}>
            <Text>
              <Icon name="home" type="material" color="white" />
            </Text>
          </TouchableOpacity>
        }
      />

      <Tab.Navigator
        activeColor="#ff9500"
        inactiveColor="white"
        barStyle={{backgroundColor: '#00d5ff'}}>
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
          component={ProductsSceeen}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({color}) => (
              <>
                <Badge
                  status="warning"
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
    </>
  );
};

export default BottomTabNav;
