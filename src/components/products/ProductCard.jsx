import { Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import AppStyles from '../../ui/appStyles';
import { Heart } from 'iconsax-react-nativejs';
import AppColors from '../../ui/appColor';
import { useNavigation } from '@react-navigation/native';
import AppRoutes from '../../navigation/routes';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../store/slices/favoriteSlice';

const ProductCard = ({ item }) => {
  // Navigation Kurulumu
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { favorites } = useSelector(store => store.favorites);

  const hearted = favorites.some(favorite => favorite.id === item.id);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(AppRoutes.DETAIL, { product: item })}
      style={AppStyles.productCard}
    >
      {/* Image */}
      <Image source={{ uri: item?.images[0] }} style={AppStyles.productImage} />

      {/* Favorite Icon */}
      <TouchableOpacity
        style={[
          AppStyles.favoriteIcon,
          { backgroundColor: hearted ? AppColors.error : AppColors.gray },
        ]}
        onPress={() =>
          !hearted
            ? dispatch(addToFavorites(item))
            : dispatch(removeFromFavorites(item.id))
        }
      >
        <Heart size="20" color={hearted ? AppColors.white : AppColors.black} />
      </TouchableOpacity>

      {/* Title */}
      <Text style={AppStyles.productTitle}>{item.title}</Text>

      {/* Brand */}
      <Text style={AppStyles.productBrand}>{item.brand}</Text>

      {/* Price */}
      <Text style={AppStyles.productPrice}>${item.price}</Text>
    </TouchableOpacity>
  );
};

export default ProductCard;
