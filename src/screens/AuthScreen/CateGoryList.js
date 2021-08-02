import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import {DataManger} from '../../global/Context/Context';
import {Card, Button, Image} from 'react-native-elements';
import {Api2} from '../../global/Api/Api';
import {useCamera} from './../../global/Context/ImageContext';
import AddProduct from '../../global/Components/Modal/AddProduct';

const CateGoryList = () => {
  const {category, setCategoryReload} = useContext(DataManger);

  const DeleteData = async id => {
    const response = await Api2.delete(`/category/${id}`);
    console.warn(response.data);
    await setCategoryReload(true);
  };

  return (
    <ScrollView>

      
      <Card containerStyle={{padding: 0}}>

        <AddProduct type="category" />
        {category.map(item => (
          <View key={Math.random()} style={styles.card}>
            <Text style={styles.title}>{item.label}</Text>
            <View style={styles.image}>
              <Image
                style={{height: 40, width: 40, resizeMode: 'contain'}}
                source={{uri: item.image}}
              />
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
      </Card>
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
