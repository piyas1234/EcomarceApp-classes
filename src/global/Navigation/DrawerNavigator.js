import React, { useContext, useEffect } from 'react';
import {View, Text, Button} from 'react-native';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import { DataManger } from '../Context/Context';
import { useNavigation } from '@react-navigation/native';
const Drawer = createDrawerNavigator();



function Feed({navigation}) {
      
    const {refresh, setDrawerNavigator} = useContext(DataManger)
    useEffect(() => {
        setDrawerNavigator(navigation)
    }, [refresh])

    
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}



function Notifications() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications Screen</Text>
    </View>
  );
}



function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}



const DrawerNavigator = () => {
 
  return (
    <Drawer.Navigator
      openByDefault
      drawerType="back"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen  name="Feed" component={Feed} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
};



export default DrawerNavigator;
