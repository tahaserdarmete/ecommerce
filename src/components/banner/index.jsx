import { View, Text, Image, FlatList } from 'react-native';
import React from 'react';
import AppStyles from '../../ui/appStyles';
import { banners } from '../../constants';
import { screenWidth } from '../../ui/dimensions';

const Banner = () => {
  // Herbir banner elemanı için render edilecek içerik
  const renderItem = ({ item }) => (
    <View
      style={[AppStyles.bannerCard, AppStyles.row, { width: screenWidth - 20 }]}
    >
      <View style={AppStyles.bannerTextContainer}>
        <Text style={AppStyles.bannerTitle}>{item.title}</Text>
        <Text style={AppStyles.bannerSubtitle}>{item.subtitle}</Text>
      </View>
      <Image source={{ uri: item.image }} style={AppStyles.bannerImage} />
    </View>
  );
  return (
    <FlatList
      data={banners}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
    />
  );
};

export default Banner;
