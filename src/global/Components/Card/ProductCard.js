import React, { useContext } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import {Image, Button} from 'react-native-elements';
import {Card} from 'react-native-elements/dist/card/Card';
import { DataManger } from '../../Context/Context';

const ProductCard = ({item}) => {


  const {cart, setCart} = useContext(DataManger)
  console.log(cart)
  console.log(item);     
  
  
  const onPressHandeler = (item)=>{
   const check =  cart.find(pd=> pd._id===item._id)
    check ?Alert.alert("Product Already Added"):setCart([...cart, item])
     }
  
  return (
    <View style={styles.main} >
      <View  style={styles.subMain} >
      <Image source={{uri: item.image}} style={{width:'100%', height:140,resizeMode:'contain'}} />
      <Text style={styles.title}>{item.name.slice(0,10)}</Text>
      <View style={styles.button}>
      <Button type="outline"   title= {`Price $ ${item.real_price} `}  />
    <Button onPress={()=>onPressHandeler(item)} title="Add cart" />
      </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({

    main:{
        width:'50%',
        borderWidth:3,
        borderColor:'#ced5d6'
       
    },

    subMain:{
        padding:5,
        backgroundColor:'white',
        marginVertical:10,
    },

    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'#0c6e82',
        marginVertical:10,
        textAlign:'center'
    },
    button:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
});
