import { View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../loader';
import Error from '../error';
import ProductCard from './ProductCard';
import AppStyles from '../../ui/appStyles';

const ProductsWrapper = () => {
  // Store'a abone ol
  const { products, error, laoding } = useSelector(state => state.products);

  return (
    <View>
      {laoding ? (
        <Loader />
      ) : error ? (
        <Error message="API işlemi sırasında hata oluştu" onretry />
      ) : (
        <View style={AppStyles.productsWrapper}>
          {products.map(item => (
            <ProductCard key={item.id} item={item} />
          ))}
        </View>
      )}
    </View>
  );
};

export default ProductsWrapper;
