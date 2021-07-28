import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native-elements/dist/image/Image'
const BrandCard = ({item}) => {
    return (
        <View style={styles.main}>
          
        <View style={styles.subMain} >
         <Image style={styles.image} source={{uri:item.image}} />
        <Text style={styles.title}>{item.value}</Text>
         </View>
        </View>
    )
}

export default BrandCard;

const styles = StyleSheet.create({
main:{
    width:'25%',
    
     
     

},

subMain:{
    padding:10,
    margin:5,
    backgroundColor:'white',
    borderRadius:10,
    elevation:2,
    height:120,
    overflow:'hidden'
},
image:{
    width:'100%', 
    height:70, 
    resizeMode:'contain',
    borderRadius:30,
     
},
title:{
    fontSize:14,
    fontWeight:'bold',
    textAlign:'center',
    color:'gray'
}

})
