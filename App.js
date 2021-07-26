import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
 
import {SafeAreaProvider} from 'react-native-safe-area-context';
 
import Context from './src/global/Context/Context';
import BottomTabNav from './src/global/Navigation/BottomTabNav';
 
const App = () => {
  return (
    <Context>
      <SafeAreaProvider>
        <BottomTabNav/>
      </SafeAreaProvider>
    </Context>
  );
};

export default App;

const styles = StyleSheet.create({});
