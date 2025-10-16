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
import EmptyCart from '../../components/cart/emptyCart';
import CartItem from '../../components/cart/cartItem';
import { screenHeight } from '../../ui/dimensions';

const CartScreen = ({ navigation }) => {
  const cart = useSelector(state => state.cart.items);

  console.log('CartScreen data: ', cart);

  return (
    <View style={AppStyles.container}>
      {/* Header */}
      <View style={[AppStyles.row, AppStyles.rowBetween, AppStyles.cartHeader]}>
        {/* Back Icon */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft2 size="25" color={AppColors.black} />
        </TouchableOpacity>

        {/* Title */}
        <Text style={AppStyles.cartHeaderTitle}>My Cart</Text>

        {/* Empty View */}
        <View style={{ width: 24 }}></View>
      </View>

      {/* Card List */}
      {/* Eğer sepette ürün yoksa empty, varsa ürünü renderla */}
      <View style={{ flex: 12 }}>
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <FlatList
            data={cart}
            renderItem={product => <CartItem product={product.item} />}
          />
        )}
      </View>

      {cart.length > 0 && (
        <View style={AppStyles.orderComplate}>
          <TouchableOpacity style={AppStyles.complateOrder}>
            <Text style={AppStyles.complateOrderText}>Complate Order</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
