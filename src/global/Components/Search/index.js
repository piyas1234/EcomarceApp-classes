import React, {useContext, useState} from 'react';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import {DataManger} from '../../Context/Context';



const Search = () => {
  const {search, setSearch} = useContext(DataManger);
  
  return (
    

        <SearchBar
          containerStyle={{
             
          }}
          inputContainerStyle={{
            backgroundColor: '#d3dfe6',
            borderWidth: 1,
            borderColor: 'gray',
            height:40
          }}
          placeholder="search product..."
          onChangeText={text => setSearch(text)}
          value={search}
        />
 
  );
};

export default Search;

 
