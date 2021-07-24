import React, {createContext, useEffect, useState} from 'react';
import Api from '../Api/Api';

export const DataManger = createContext();

const Context = props => {
  const [Auth, setAuth] = useState({
    auth: false,
  });
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])



  useEffect(() => {
    LoadProduct();
  }, []);

  const LoadProduct = async () => {
    try {
      const ProductData = await Api.get('/product');
      setProducts(ProductData.data);
      console.log(ProductData.data)
    } catch (err) {
      console.log(err);
    }
  };



  const value = {Auth, setAuth, products, setProducts, cart, setCart};
  return (
    <DataManger.Provider value={value}>{props.children}</DataManger.Provider>
  );
};

export default Context;
