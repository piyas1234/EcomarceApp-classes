import * as React from 'react';
import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
 
import {name as appName} from './app.json';
import App from './App';
import Context from './src/global/Context/Context';
 
export default function Main() {
  return (
    <Context>
      <App />
    </Context>
  );
}

AppRegistry.registerComponent(appName, () => Main);
