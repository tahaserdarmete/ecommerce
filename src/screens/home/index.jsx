import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../../components/header';
import AppStyles from '../../ui/appStyles';
import Banner from '../../components/banner';
import Products from '../../components/products';

const HomeScreen = () => {
  return (
    <ScrollView style={AppStyles.container}>
      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Products */}
      <Products />
    </ScrollView>
  );
};

export default HomeScreen;
