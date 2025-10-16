import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Bag2 } from 'iconsax-react-nativejs';
import { useNavigation } from '@react-navigation/native';
import AppStyles from '../../ui/appStyles';
import AppColors from '../../ui/appColor';
import AppRoutes from '../../navigation/routes';
import { useSelector } from 'react-redux';

const CartIcon = () => {
  const navigation = useNavigation();

  const { items } = useSelector(store => store.cart);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(AppRoutes.CART)}
      style={[AppStyles.icon, AppStyles.row]}
    >
      <Bag2 size="24" color={AppColors.textPrimary} />
      {items.length > 0 && (
        <View style={AppStyles.badge}>
          <Text style={AppStyles.badgeText}>{items.length}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartIcon;

const styles = StyleSheet.create({});
