import React, {useContext, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Input, Button, Text, Image} from 'react-native-elements';
import {Picker} from 'react-native';
import {useGallery, useCamera} from '../../Context/ImageContext';
import {DataManger} from '../../Context/Context';
import {Api2} from '../../Api/Api';

const AddProductForm = () => {
  const {category, brand} = useContext(DataManger);
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState({
    name: '',
    product_category: '',
    product_brand: '',
    real_price: '',
    discount_price: '',
    description: '',
  });

  console.log(input);



  const onImageAdd = async () => {
    await image === '' ? useCamera(setImage, setLoading)  : Alert.alert('Selected', 'Image Already selected');
  };






  const onPressHanlder = async () => {
    if (
      image === '' &&
      input.name === '' &&
      input.product_category === '' &&
      input.product_brand === '' &&
      input.real_price === '' &&
      input.discount_price === '' &&
      input.description === ''
    ) {
      return Alert.alert('Validation error', 'Please Fill the all fields');
    }

    const response = await Api2.post('/product', {...input, image});

    console.log(response)
    Alert.alert('Product add', response.data.message);
  };

  return (
    <ScrollView style={styles.main}>
      <Input
        onChangeText={text => setInput({...input, name: text})}
        placeholder="product name"
        leftIcon={{type: 'materialicons', name: 'title'}}
        style={styles}
      />

      <View style={styles.picker}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Select a category
        </Text>

        <Picker
          selectedValue={input.product_category}
          style={{height: 50, width: '100%', borderWidth: 1}}
          onValueChange={itemValue =>
            setInput({...input, product_category: itemValue})
          }>
          {category?.map(item => (
            <Picker.Item
              key={Math.random()}
              label={item.label}
              value={item.value}
            />
          ))}
        </Picker>
      </View>

      <View style={styles.picker}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Select a brand</Text>
        <Picker
          selectedValue={input.product_brand}
          style={{height: 50, width: '100%', borderWidth: 1}}
          onValueChange={itemValue =>
            setInput({...input, product_brand: itemValue})
          }>
          {brand?.map(item => (
            <Picker.Item
              key={Math.random()}
              label={item.value}
              value={item.value}
            />
          ))}
        </Picker>
      </View>




      {loading && <ActivityIndicator size="large" color="#1b82f7" />}



      {image !== '' && (
        <View
          style={{
            width: '50%',
            backgroundColor: '#fffc',
            padding: 10,
            elevation: 10,
          }}>
          <Button
            onPress={() => setImage('')}
            type="outline"
            buttonStyle={{width: 40, marginLeft: 'auto'}}
            title="X"
          />

          <View>
            <Image
              style={{width: 100, height: 120, resizeMode: 'contain'}}
              source={{uri: image}}
            />
          </View>
        </View>
      )}















      
      <Button
        onPress={onImageAdd}
        buttonStyle={{
          backgroundColor: image === '' ? 'tomato' : '#1b82f7',
          width: '50%',
          padding: 8,
          borderRadius: 10,
          marginVertical: 20,
        }}
        title={image === '' ? 'select a image' : 'sellected'}
      />






      <Input
        onChangeText={text => setInput({...input, real_price: text})}
        placeholder="real_price"
        leftIcon={{type: 'entypo', name: 'price-ribbon'}}
        style={styles}
      />

      <Input
        onChangeText={text => setInput({...input, discount_price: text})}
        placeholder=" discount_price"
        leftIcon={{type: 'entypo', name: 'price-ribbon'}}
        style={styles}
      />

      <Input
        onChangeText={text => setInput({...input, description: text})}
        placeholder=" description"
        leftIcon={{type: 'materialicons', name: 'description'}}
        style={styles}
      />

      <Button onPress={onPressHanlder} title="add Product" />
    </ScrollView>
  );
};

export default AddProductForm;

const styles = StyleSheet.create({
  main: {
    marginTop: 30,
  },
});
