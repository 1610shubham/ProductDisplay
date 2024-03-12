import axios from 'axios';

export const fetchProducts = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};

export const fetchProductDetails = async (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  };
