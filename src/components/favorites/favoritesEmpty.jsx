import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import AppStyles from '../../ui/appStyles';
import { useNavigation } from '@react-navigation/native';
import AppRoutes from '../../navigation/routes';

const FavoritesEmpty = () => {
  const navigation = useNavigation();

  return (
    <View style={AppStyles.emptyContainer}>
      <View style={AppStyles.emptyWrapper}>
        <Text style={AppStyles.emptyTitle}>No Favorites</Text>
        <Text style={AppStyles.emptyDescription}>
          You have no favorited items
        </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={AppStyles.emptyButton}
        >
          <Text style={AppStyles.emptyButtonText}>Go to home page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FavoritesEmpty;
