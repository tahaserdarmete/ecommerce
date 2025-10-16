import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import AppColors from '../../ui/appColor';
import AppStyles from '../../ui/appStyles';

const Loader = () => {
  return (
    <View style={AppStyles.centerContainer}>
      <ActivityIndicator size="small" color={AppColors.primary} />
    </View>
  );
};

export default Loader;
