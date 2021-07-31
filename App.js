import React, {useContext, useRef, useEffect} from 'react';
 
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import BottomTabNav from './src/global/Navigation/BottomTabNav';
import {NavigationContainer} from '@react-navigation/native';
import {DataManger} from './src/global/Context/Context';
import { Animated, View , Text } from 'react-native';

const App = () => {
  const {  slider, products, category, brand} = useContext(DataManger);


 

  
  return slider.length >0 && products.length >0 && category.length >0 && brand.length >0 ? (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTabNav />
      </NavigationContainer>
    </SafeAreaProvider>
  ):

  (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
      <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
    </FadeInView>
  </View>
  )



};

export default App;







const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}
