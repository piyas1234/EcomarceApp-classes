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

const AddCategoryForm = () => {
  const {category, brand} = useContext(DataManger);
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState({
    label: '',
    value: '',
  });

  console.log(input);

  const onImageAdd = async () => {
    (await image) === ''
      ? useCamera(setImage, setLoading)
      : Alert.alert('Selected', 'Image Already selected');
  };

  const onPressHanlder = async () => {
    if (
      image === '' &&
      input.label === '' &&
      input.value === '' 
    ) {
      return Alert.alert('Validation error', 'Please Fill the all fields');
    }

    const response = await Api2.post('/category', {...input, image});

    console.log(response);
    Alert.alert('Product add', response.data.message);
  };

  return (
    <ScrollView style={styles.main}>
      <Input
        onChangeText={text => setInput({...input, label: text})}
        placeholder="Label"
        leftIcon={{type: 'materialicons', name: 'title'}}
        style={styles}
      />

       <Input
        onChangeText={text => setInput({...input, value: text})}
        placeholder="value"
        leftIcon={{type: 'materialicons', name: 'title'}}
        style={styles}
      />

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

    <Button onPress={onPressHanlder} title="add Category" />
    </ScrollView>
  );
};

export default AddCategoryForm;

const styles = StyleSheet.create({
  main: {
    marginTop: 30,
  },
});
