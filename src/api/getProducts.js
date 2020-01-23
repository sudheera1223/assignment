import { GET_PRODUCTS_URL } from './urls'

export const getProductsFromAPI = async () => {
  try {
    const response = await fetch(GET_PRODUCTS_URL);
    const productsData = await response.json();
    return productsData;
  } catch (e) {
    console.log(e);
  }
};
