import React, {useContext} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {Image, Button, Icon, Card, ListItem} from 'react-native-elements';
import {DataManger} from '../../Context/Context';

const ProductCard = ({item}) => {
  const {cart, setCart} = useContext(DataManger);

  const onPressHandeler = item => {
    const check = cart.find(pd => pd._id === item._id);
    check ? Alert.alert('Product Already Added') : setCart([...cart, item]);
  };

  return (
    <View style={styles.main}>
      <Card>
        <View style={{flexDirection: 'row'}}>
          <Card.Title>Price:</Card.Title>
          <Card.Title
            style={{
              color: 'red',
              textDecorationLine: 'line-through',
              fontSize: 18,
            }}>
            ${item.real_price}
          </Card.Title>
          <Card.Title style={{color:'#008cff'}}> ${item.discount_price}</Card.Title>
        </View>
        <Card.Divider />
        <Card.Image
          style={{resizeMode: 'contain'}}
          source={{uri: item.image}}></Card.Image>
        <Card.Title>{item.name}</Card.Title>
        
        <View style={styles.button}>
          <Button
             
            icon={
              <Icon type="fontisto" size={16} name="dollar" color="#ffffff" />
            }
            buttonStyle={{
              backgroundColor: '#00bbff',
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title={item.real_price}
          />
          <Button
            onPress={() => onPressHandeler(item)}
            icon={
              <Icon type="fontawesome" name="shopping-cart" color="#ffffff" />
            }
            buttonStyle={{
              backgroundColor: 'gold',
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
          />
        </View>
      </Card>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  main: {
    width: '50%',
  },

 

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0c6e82',
    marginVertical: 10,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
