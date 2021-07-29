import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Api2} from '../../global/Api/Api';
import ProductCard from '../../global/Components/Card/ProductCard';
const CateGoryScreen = ({route}) => {
  const {value, type} = route.params;
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  useEffect(() => {
   type==="Categories" && LoadCateGory();
   type==="brands" && LoadBrand();
  }, [value]);


 

  const LoadCateGory = async () => {
    try {
      const Data = await Api2.get(`/product/category/${value}`);
      setData(Data.data.products);
    } catch (err) {
      console.log(err);
    }
  };


  const LoadBrand = async () => {
    try {
      const Data = await Api2.get(`/product/brand/${value}`);
      setData(Data.data.products);
    } catch (err) {
      console.log(err);
    }
  };





  return (
    <>
     {data.length > 0 && <View>
     <View style={styles.buttonmain}>
       <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
         <AntDesign color="white" size={30} name="arrowleft" />
       </TouchableOpacity>
       <Text style={styles.title}>Back</Text>
     </View>

     <FlatList
       numColumns={2}
       data={data}
       renderItem={({item}) => <ProductCard item={item} />}
       keyExtractor={item => item._id}
     />
   </View>}

   {
     data.length < 1 && <Text>No Products Found!</Text>
   }



   </>
  );
};

export default CateGoryScreen;

const styles = StyleSheet.create({
  buttonmain: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7d10e3',
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
