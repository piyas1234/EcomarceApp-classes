import React, {createContext, useEffect, useState} from 'react';
import {SearchProduct , LoadCategory , LoadBrand , LoadProduct , LoadSlider} from './GetData'
export const DataManger = createContext();

const Context = props => {


  const [Auth, setAuth] = useState({auth: false});
  const [slider, setSlider] = useState([])
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([])
  const [brand, setBrand] = useState([])
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [refresh, setRefresh] = useState(false)



 

useEffect( async () => {
     await setRefresh(true)
     await LoadSlider(setSlider)
     await LoadCategory(setCategory);
     await LoadBrand(setBrand)
     await LoadProduct(setProducts);
     await setRefresh(false)
  }, []);



useEffect( async() => {
 await setRefresh(true)
 await SearchProduct(setSearchResult, search)
 await setRefresh(false)
}, [search])


 
 


  const value = {Auth, setAuth, products, setProducts, cart, setCart, category, setCategory,brand, setBrand,search, setSearch, refresh, setRefresh,searchResult, setSearchResult, slider, setSlider};
  
  
  return (
    <DataManger.Provider value={value}>{props.children}</DataManger.Provider>
  );
};

export default Context;
