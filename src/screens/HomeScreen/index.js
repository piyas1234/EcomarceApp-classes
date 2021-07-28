import React, {useContext } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  
} from 'react-native';
import Header from './Header';
import ProductCard from '../../global/Components/Card/ProductCard';
import {DataManger} from '../../global/Context/Context';
import Search from './../../global/Components/Search/index';

const HomeScreen = () => {
  const {products, refresh, search , searchResult} = useContext(DataManger);

  return (
    <View>


       <View style={styles.search}>
       <Search />
       </View>


       <View style={styles.list}>
       {search === '' && (
        <FlatList
          ListHeaderComponent={<Header />}
          refreshing={refresh}
          onRefresh={refresh}
          numColumns={2}
          data={products}
          renderItem={({item}) => <ProductCard item={item} />}
          keyExtractor={item => item._id}
           
        />
      )}

      {search !== '' && (
        <View>
          <FlatList
          refreshing={refresh}
          onRefresh={refresh}
          numColumns={2}
          data={searchResult}
          renderItem={({item}) => <ProductCard item={item} />}
          keyExtractor={item => item._id}
        />
        {searchResult?.length < 1    && <Text>No Product Found</Text> }
        </View>
      )}
       </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

    search:{
        height:'11%'
    },
    list:{
        height:'89%'
    },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'gray',
  },
});
