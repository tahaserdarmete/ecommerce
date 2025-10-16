import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import AppStyles from '../../ui/appStyles';
import ProductsWrapper from './ProductsWrapper';

const Products = () => {
  return (
    <View>
      {/* Title */}
      <View
        style={[AppStyles.row, AppStyles.rowBetween, AppStyles.productsTop]}
      >
        <Text style={AppStyles.productsTitle}>Products</Text>

        <TouchableOpacity>
          <Text style={AppStyles.button}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* Products */}
      <ProductsWrapper />
    </View>
  );
};

export default Products;
