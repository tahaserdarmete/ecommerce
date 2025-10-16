import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  AddCircle,
  ArrowLeft2,
  Bag2,
  MinusCirlce,
  Star1,
} from 'iconsax-react-nativejs';
import AppColors from '../../ui/appColor';
import AppStyles from '../../ui/appStyles';
import AppRoutes from '../../navigation/routes';
import { productsColor } from '../../constants';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import CartIcon from '../../components/cart/cartIcon';

const ProductDetail = () => {
  // useNavigation ile yönlendirilme yapılan sayfaya birden fazla props geçirilebilir. Bu durumda props'lar erişmek için useRute kullanılır.
  const { params } = useRoute();
  const navigation = useNavigation();
  const product = params.product;
  const dispatch = useDispatch();

  // Seçili renk yönetimi için state oluştur
  const [selectedColor, setSelectedColor] = useState('#A15B4F');

  // Sepete Ürün Ekle
  const handleAddToCart = () => {
    // Sepete ürün eklemeli.Eğer ürün sepette ise ürünü sıfırdan eklemek yerine sayısını 1 artır
    dispatch(addToCart(product));
  };

  return (
    <ScrollView>
      {/* Header */}
      <View
        style={[AppStyles.row, AppStyles.rowBetween, AppStyles.detailHeader]}
      >
        {/* Back Icon */}
        <TouchableOpacity onPress={() => navigation.goBack('/')}>
          <ArrowLeft2
            size="25"
            color={AppColors.black}
            style={AppStyles.backIcon}
          />
        </TouchableOpacity>

        {/* Title */}
        <Text style={AppStyles.detailHeaderTitle}>Product Detail</Text>

        {/* Cart Icon */}
        <CartIcon />
      </View>

      {/* Product Image */}
      <Image
        source={{ uri: product.images[0] }}
        style={AppStyles.detailImage}
      />

      {/* Product Info */}
      <View style={AppStyles.detailCard}>
        {/* Top */}
        <View
          style={[AppStyles.row, AppStyles.rowBetween, AppStyles.productTop]}
        >
          <Text style={AppStyles.productDetailTitle}>{product.title}</Text>

          <View style={[AppStyles.row, AppStyles.buttonsWrapper]}>
            <MinusCirlce size="24" color={AppColors.black} />

            <Text style={AppStyles.quantity}>5</Text>

            <AddCircle size="24" color={AppColors.black} />
          </View>
        </View>

        {/* Raiting && Stock */}
        <View
          style={[
            AppStyles.row,
            AppStyles.rowBetween,
            AppStyles.ratingContainer,
          ]}
        >
          <View style={AppStyles.row}>
            <Star1 size="20" color={AppColors.star} />
            <Text style={AppStyles.reviews}>{product.rating}</Text>
            <Text style={AppStyles.reviewsCount}>
              ({product.reviews.length} Reviews)
            </Text>
          </View>

          <Text style={AppStyles.stock}>Avaliable Stock</Text>
        </View>

        {/* Colors */}
        <View style={[AppStyles.colorsWrapper, AppStyles.row]}>
          {productsColor.map((color, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedColor(color)}
              style={[
                AppStyles.colorCircle,
                {
                  backgroundColor: color,
                  borderWidth: selectedColor === color ? 3 : 0,
                  borderColor: AppColors.textSecondary,
                },
              ]}
            ></TouchableOpacity>
          ))}
        </View>

        {/* Description */}
        <Text style={AppStyles.descriptionTitle}>Description</Text>

        <Text style={AppStyles.descriptionText}>{product.description}</Text>

        {/* Add to cart */}
        <View style={[AppStyles.row, AppStyles.detailBottom]}>
          <Text style={AppStyles.productDetailPrice}>$ {product.price}</Text>

          <TouchableOpacity
            onPress={handleAddToCart}
            style={AppStyles.productCart}
          >
            <Bag2 size="24" variant="Bold" color={AppColors.white} />
            <Text style={AppStyles.productCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
