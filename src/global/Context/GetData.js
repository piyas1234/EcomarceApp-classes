
import {Api2} from '../Api/Api';


 
 export  const SearchProduct = async (setSearchResult,search) => {
      
    try {
      const ProductData = await Api2.get(`/product/search/${search}`);
      console.warn(ProductData.data)
      setSearchResult(ProductData.data.products)
    } catch (err) {
      console.log(err);
    }
  };



  export const LoadCategory = async (setCategory)=>{
  try{
   const CateGory = await  Api2.get('/category')
   setCategory(CateGory.data)
  }
  catch(err){
    console.log(err)
  }
}

export const LoadBrand = async (setBrand)=>{
  try{
   const brand = await  Api2.get('/brand')
   setBrand(brand.data)
  }
  catch(err){
    console.log(err)
  }
}

 
 export const LoadProduct = async (setProducts) => {
    
    try {
      const ProductData = await Api2.get(`/product`);
      await setProducts(ProductData.data.products)
    } catch (err) {
      console.log(err);
    }
  };



  export const LoadSlider =  async (setSlider)=>{
    try{
    const Slider =   await Api2.get(`/slider`)
    await setSlider(Slider.data.products)
    }
    catch(err){
      console.log(err)
    }
  }