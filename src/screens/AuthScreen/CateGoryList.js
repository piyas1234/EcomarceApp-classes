import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import {DataManger} from '../../global/Context/Context';
import {Card, Button, Image} from 'react-native-elements';
import {Api2} from '../../global/Api/Api';
import { useCamera } from './../../global/Context/ImageContext';
 

const CateGoryList = () => {
  const {category, setCategoryReload} = useContext(DataManger);
  const [image, setImage] = useState('');

  const onPressHandler = async ()=>{
   await useCamera(setImage)
  }

  const DeleteData = async id => {
    const response = await Api2.delete(`/category/${id}`);
    console.warn(response.data);
    await setCategoryReload(true);
  };

  return (
    <ScrollView>
      {image !== '' && (
        <View>
          <Image
            style={{width: '100%', height: 200, resizeMode: 'contain'}}
            source={{uri: image}}
          />
        </View>
      )}
      <Button onPress={onPressHandler} title="image" />
      <Card containerStyle={{padding: 0}}>
        {category.map(item => (
          <View key={Math.random()} style={styles.card}>
            <Text style={styles.title}>{item.label}</Text>
            <View style={styles.image}>
              <Image
                style={{height: 40, width: 40}}
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
