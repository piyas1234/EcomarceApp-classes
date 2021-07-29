import {Api2} from '../Api/Api';

export const SearchProduct = async (setSearchResult, search) => {
  try {
    const ProductData = await Api2.get(`/product/search/${search}`);
    setSearchResult(ProductData.data.products);
  } catch (err) {
    console.log(err);
  }
};

export const LoadCategory = async setCategory => {
  try {
    const CateGory = await Api2.get('/category');
    setCategory(CateGory.data);
  } catch (err) {
    console.log(err);
  }
};

export const LoadBrand = async setBrand => {
  try {
    const brand = await Api2.get('/brand');
    setBrand(brand.data);
  } catch (err) {
    console.log(err);
  }
};

export const LoadProduct = async (
  products,
  setProducts,
  setProductLoading,
  productCurrentPage,
) => {
  try {
    await setProductLoading(true);
    const ProductData = await Api2.get(
      `/product?page=${productCurrentPage}&&limit=4`,
    );
    await setProducts(products.concat(ProductData.data.products));
    await setProductLoading(false);
  } catch (err) {
    console.log(err);
  }
};

 






export const LoadSlider = async setSlider => {
  try {
    const Slider = await Api2.get(`/slider`);
    await setSlider(Slider.data.products);
  } catch (err) {
    console.log(err);
  }
};
