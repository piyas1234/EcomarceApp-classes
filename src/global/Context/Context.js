import React, {createContext, useEffect, useState} from 'react';
import {
  SearchProduct,
  LoadCategory,
  LoadBrand,
  LoadProduct,
  LoadSlider,
  getAuthData
} from './GetData';
export const DataManger = createContext();

const Context = props => {
  const [Auth, setAuth] = useState({auth: false});
  const [slider, setSlider] = useState([]);

  const [products, setProducts] = useState([]);
  const [productLoading, setProductLoading] = useState(false);
  const [productCurrentPage, setProductCurrentPage] = useState(1);

  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchCurrentPage, setSearchCurrentPage] = useState(1);

  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [cart, setCart] = useState([]);

  const [refresh, setRefresh] = useState(false);
  const [headerNavigator, setHeaderNavigator] = useState();
  const [DrawerNavigator, setDrawerNavigator] = useState();
  const [categoryReload, setCategoryReload] = useState(false);
  const [brandReload, setBrandReload] = useState(false);
  const [productReload, setProductReload] = useState(false);

  useEffect(async () => {
    await setRefresh(true);
    await LoadSlider(setSlider);
    await setRefresh(false);
    const Auth = await getAuthData();
    setAuth(Auth);
  }, []);

  useEffect(async () => {
    await LoadCategory(setCategory);
    await setCategoryReload(false);
  }, [categoryReload]);

  useEffect(async () => {
    await LoadBrand(setBrand);
    await setBrandReload(false);
  }, [brandReload]);

  useEffect(async () => {
    await LoadProduct(
      products,
      setProducts,
      setProductLoading,
      productCurrentPage,
    );
    await setProductReload(false);
  }, [productReload , productCurrentPage]);

  useEffect(async () => {
    await setRefresh(true);
    await SearchProduct(setSearchResult, search);
    await setRefresh(false);
  }, [search]);

 

  const value = {
    Auth,
    setAuth,
    products,
    setProducts,
    cart,
    setCart,
    category,
    setCategory,
    brand,
    setBrand,
    search,
    setSearch,
    refresh,
    setRefresh,
    searchResult,
    setSearchResult,
    slider,
    setSlider,
    headerNavigator,
    setHeaderNavigator,
    DrawerNavigator,
    setDrawerNavigator,
    productLoading,
    setProductLoading,
    productCurrentPage,
    setProductCurrentPage,
    categoryReload,
    setCategoryReload,
    brandReload,
    setBrandReload,
    productReload,
    setProductReload,
  };

  return (
    <DataManger.Provider value={value}>{props.children}</DataManger.Provider>
  );
};

export default Context;
