import React, {useContext, useEffect} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Text, View} from 'react-native';
import Header from './Header';
import ProductCard from '../../global/Components/Card/ProductCard';
import {DataManger} from '../../global/Context/Context';
import Search from './../../global/Components/Search/index';
import {useNavigation} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
 
const HomeScreen = () => {

  const {
    slider,
    products,
    category,
    brand,
    refresh,
    search,
    searchResult,
    setHeaderNavigator,
    productCurrentPage,
    setProductCurrentPage,
    productLoading,
    
  } = useContext(DataManger);
  const navigation = useNavigation();


  useEffect(()=> {
    setHeaderNavigator(navigation);
  }, []);
  
 
 
  return (
    <SafeAreaView>
      <View style={styles.search}>
        <Search />
      </View>
      <View style={styles.list}>
        {search === '' && products?.length > 0   && (
          <FlatList
            ListHeaderComponent={<Header data={{category, brand , slider}}  />}
            refreshing={refresh}
            onRefresh={refresh}
            numColumns={2}
            data={products}
            renderItem={({item}) => category.length>0 && brand.length >0 && <ProductCard item={item} />}
            keyExtractor={item => item._id}
            onEndReached={()=>setProductCurrentPage(productCurrentPage+1)}
            ListFooterComponent={productLoading ?   <ActivityIndicator  color="tomato" size="large" />  : null}
          />
        )}

        {search !== '' && (
          <SafeAreaView>
            <FlatList
              refreshing={refresh}
              onRefresh={refresh}
              numColumns={2}
              data={searchResult}
              renderItem={({item}) => <ProductCard item={item} />}
              keyExtractor={item => item._id}
            />
            {searchResult?.length < 1 && <Text>No Product Found</Text>}
          </SafeAreaView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;





const styles = StyleSheet.create({
  search: {
    height: '10%',
    zIndex:10,
     
  },

  list: {
    height: '90%',
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'gray',
  },
  loader:{
    marginVertical:10,
    alignItems:'center'
  }
});
