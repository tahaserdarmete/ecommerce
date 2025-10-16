import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import AppStyles from '../../ui/appStyles';
import { screenHeight, screenWidth } from '../../ui/dimensions';
import { Add, Minus, Trash } from 'iconsax-react-nativejs';
import AppColors from '../../ui/appColor';
import { useDispatch } from 'react-redux';
import {
  decreaseQunatity,
  increaseQunatity,
  removeItem,
} from '../../store/slices/cartSlice';

const CartItem = ({ product }) => {
  // Redux'da bir aksiyon oluşturmak (veri yazdırma, güncelleme,silme) için kullanılır.
  const dispatch = useDispatch();

  return (
    <View style={[AppStyles.row, AppStyles.rowAround, AppStyles.cartItem]}>
      {/* Image */}
      <Image
        source={{ uri: product.images[0] }}
        style={AppStyles.cartImg}
        resizeMode="contain"
      />

      {/* Seperator */}
      <View style={AppStyles.seperator}></View>

      {/* Product Info */}
      <View style={AppStyles.cartInfoContainer}>
        <Text
          numberOfLines={1}
          ellipsizeMode="middle"
          style={AppStyles.cartInfoText}
        >
          {product.title}
        </Text>

        <Text style={[AppStyles.capitalize, AppStyles.cartInfoCategory]}>
          {product.category}
        </Text>

        <View
          style={[AppStyles.row, AppStyles.rowBetween, AppStyles.cartControls]}
        >
          <View
            style={[AppStyles.row, AppStyles.rowCenter, AppStyles.btnContainer]}
          >
            <TouchableOpacity
              style={AppStyles.decreaseQuantity}
              onPress={() => dispatch(decreaseQunatity(product.id))}
            >
              <Minus size="20" color={AppColors.black} />
            </TouchableOpacity>

            <Text style={{ fontSize: 18 }}>{product.quantity}</Text>

            <TouchableOpacity
              style={AppStyles.increaseQuantity}
              onPress={() => dispatch(increaseQunatity(product.id))}
            >
              <Add size="20" color={AppColors.black} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={AppStyles.trashBtn}
            onPress={() => dispatch(removeItem(product.id))}
          >
            <Trash color={AppColors.error} />
          </TouchableOpacity>

          <Text style={[AppStyles.textCenter, AppStyles.cartItemPrice]}>
            ${(product.quantity * product.price).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
