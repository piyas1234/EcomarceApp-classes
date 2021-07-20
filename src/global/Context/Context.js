import React, {createContext, useState} from 'react';

export const DataManger = createContext();

const Context = props => {
  const [Auth, setAuth] = useState({
    auth:false,
    
  });
  const [products, setProducts] = useState([]);

  const value = {Auth, setAuth, products, setProducts};

  return (
    <DataManger.Provider value={value}>
        {props.children}
   </DataManger.Provider>
  );


  
};

export default Context;
