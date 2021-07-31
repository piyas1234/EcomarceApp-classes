import React, {useContext} from 'react';
import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import {DataManger} from '../../global/Context/Context';
import {Card, ListItem, Button, Icon, Image} from 'react-native-elements';
import {Api2} from '../../global/Api/Api';
import AddProduct from '../../global/Components/Modal/AddProduct';
const CateGoryList = () => {
  const {products, setProductReload} = useContext(DataManger);

  const DeleteData = async id => {
    const response = await Api2.delete(`/product/${id}`);

    await setProductReload(true);
    console.log(response.data);
  };

  

  return (
    <ScrollView>
      <View style={{marginVertical:10}}>
      <AddProduct type="addproduct" />
      </View>
      {products.map(item => (
        <View key={Math.random()} style={styles.card}>
          <Text style={styles.title}>{item.name.slice(0, 6)}</Text>
          <Text style={styles.title}>${item.discount_price}</Text>
          <View style={styles.image}>
            <Image style={{height: 40, width: 40}} source={{uri: item.image}} />
          </View>

          <Button
            onPress={() => DeleteData(item._id)}
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
    </ScrollView>
  );
};

export default CateGoryList;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#e3e2e1',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    width: '25%',
  },
  image: {
    width: '25%',
  },
});
