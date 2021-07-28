import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import {DataManger} from '../../Context/Context';



const Search = () => {
  const {search, setSearch} = useContext(DataManger);
  
  return (
    

        <SearchBar
          inputContainerStyle={{
            backgroundColor: '#d3dfe6',
            borderWidth: 1,
            borderColor: 'gray',
          }}
          placeholder="search product..."
          onChangeText={text => setSearch(text)}
          value={search}
        />
 
  );
};

export default Search;

 
