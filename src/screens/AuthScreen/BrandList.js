import React, {useContext} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {DataManger} from '../../global/Context/Context';
import {Card , Button,   Image} from 'react-native-elements';
import { Api2 } from '../../global/Api/Api';
import AddProduct from '../../global/Components/Modal/AddProduct';
const BrandList = () => {
  const {brand , setBrandReload} = useContext(DataManger);

  const DeleteData = async (id) =>{
     
    const response = await Api2.delete(`/brand/${id}`)
    await setBrandReload(true)
     console.warn(response.data)
     
     
}

  return (
    <ScrollView>
      <Card containerStyle={{padding: 0}}>

        <AddProduct type="addproduct" />
        {brand.map(item => (
          <View key={Math.random()}  style={styles.card}>
            <Text style={styles.title}>{item.label}</Text>
            <View style={styles.image}>
            <Image style={{height: 40, width: 40 ,resizeMode:'contain'}} source={{uri: item.image}} />
            </View>
            
            <Button
            onPress={()=>DeleteData(item._id)}
             type="outline"
              icon={{
                name: 'delete',
                size: 25,
                color: 'red',
              }}
              
            />

             <Button
              type="outline"
              icon={{
                name: 'edit',
                size: 25,
                color: 'gold',
              }}
              
            />



          </View>
        ))}
      </Card>
    </ScrollView>
  );
};

export default BrandList;

const styles = StyleSheet.create({
    card:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        paddingVertical:5,
        borderWidth:1,
        borderColor:'#e3e2e1'
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        width:'25%'
    },
    image:{
        width:'25%',
    },
    
});
