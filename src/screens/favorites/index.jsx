import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import AppStyles from '../../ui/appStyles';
import { ArrowLeft2 } from 'iconsax-react-nativejs';
import AppColors from '../../ui/appColor';
import FavoritesEmpty from '../../components/favorites/favoritesEmpty';
import FavoriteItem from '../../components/favorites/favoriteItem';

const CartScreen = ({ navigation }) => {
  const { favorites } = useSelector(state => state.favorites);

  return (
    <View style={AppStyles.container}>
      {/* Header */}
      <View style={[AppStyles.row, AppStyles.rowBetween, AppStyles.cartHeader]}>
        {/* Back Icon */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft2 size="25" color={AppColors.black} />
        </TouchableOpacity>

        {/* Title */}
        <Text style={AppStyles.cartHeaderTitle}>My Favorites</Text>

        {/* Empty View */}
        <View style={{ width: 24 }}></View>
      </View>

      {/* Card List */}
      {/* Eğer sepette ürün yoksa empty, varsa ürünü renderla */}
      <View style={{ flex: 12 }}>
        {favorites.length === 0 ? (
          <FavoritesEmpty />
        ) : (
          <FlatList
            data={favorites}
            renderItem={product => <FavoriteItem product={product.item} />}
          />
        )}
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
