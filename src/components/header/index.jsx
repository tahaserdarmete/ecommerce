import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import AppStyles from '../../ui/appStyles';
import { Bag2 } from 'iconsax-react-nativejs';
import AppColors from '../../ui/appColor';
import { useNavigation } from '@react-navigation/native';
import AppRoutes from '../../navigation/routes';
import CartIcon from '../cart/cartIcon';

const Header = () => {
  // Navigate Kurulumu
  const navigation = useNavigation();
  return (
    <View style={AppStyles.wrapper}>
      {/* Profile */}
      <View style={[AppStyles.row, AppStyles.rowBetween]}>
        <View style={[AppStyles.row, AppStyles.profileContainer]}>
          {/* Profile Image */}
          <Image
            style={AppStyles.avatar}
            source={{ uri: 'https://randomuser.me/api/portraits/men/79.jpg' }}
          />

          {/* Profile Info */}
          <View>
            <Text style={AppStyles.title}>Hi, Serdar</Text>
            <Text style={AppStyles.subtitle}>Let's go shopping</Text>
          </View>
        </View>

        <View style={AppStyles.row}>
          {/* Cart Icon */}
          <CartIcon />
        </View>
      </View>
    </View>
  );
};

export default Header;
