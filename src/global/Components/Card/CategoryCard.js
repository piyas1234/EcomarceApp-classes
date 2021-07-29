import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native-elements/dist/image/Image';
const CategoryCard = ({item, type = null}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('CateGoryScreen', {value: item.value, type})
      }
      style={styles.main}>
      <View style={styles.subMain}>
        <Image style={styles.image} source={{uri: item.image}} />
        <Text style={styles.title}>{item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  main: {
    width: '25%',
  },

  subMain: {
    padding: 5,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 1,
    height: 70,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 40,
    resizeMode: 'contain',
    borderRadius: 30,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#212021',
  },
});
