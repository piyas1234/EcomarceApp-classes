import React, {useContext} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DataManger} from '../../Context/Context';

const CartCard = ({item}) => {
  const {cart, setCart} = useContext(DataManger);
  console.warn(cart.length)
  const onPressHandeler = id => {
    const newCart = cart.filter(item => item._id !== id);
    setCart(newCart);
  };
  return  (
    <View style={styles.main}>
      <Text style={styles.title}>{item.title}</Text>
      <Image style={styles.image} source={{uri: item.image}} />
      <Text style={styles.title}>{item.price}</Text>
      <Button
        type="outline"
        icon={<MaterialCommunityIcons name="delete" size={24} color="red" />}
        title=""
        onPress={() => onPressHandeler(item._id)}
      />
    </View>
  ) 
};

export default CartCard;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 5,
    backgroundColor: 'white',
    padding: 5,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    width: '25%',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
