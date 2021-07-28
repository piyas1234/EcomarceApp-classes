import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, View , Image, Button } from 'react-native'
import CartCard from '../../global/Components/Card/CartCard'
import { DataManger } from '../../global/Context/Context'

const ProductsSceeen = () => {

    const {cart , setCart} = useContext(DataManger)
    return cart.length > 0 ?  (
        <View>
            <Button title="Process to checkout" /> 
           <FlatList
            data={cart}
            renderItem = {({item})=><CartCard item={item} />}
            keyExtractor={(item)=>item._id}
           />
        </View>
    ) :
    (
         <View style={styles.container}> 
             <View style={styles.main}>
            <Text style={styles.title}>Cart is empty</Text>
            <Image style={styles.image} source={require("../../global/image/shopping-cart.png")} />
        </View>
         </View>
    )

}

export default ProductsSceeen

const styles = StyleSheet.create({

    container:{
     backgroundColor:'#231826'
    },

    main:{
      alignItems:'center',
      marginVertical:200,
       
    },
    image:{
        width:300,
        height:300,
        resizeMode:'cover',
         
    },
    title:{
        fontSize:28,
        fontWeight:'bold',
        color:'#083a4d',
        textAlign:'center'
    }
})
