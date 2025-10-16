import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppRoutes from './routes';
import HomeScreen from '../screens/home';
import DetailScreen from '../screens/detail';
import CartScreen from '../screens/cart';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const NativeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={AppRoutes.HOME} component={HomeScreen} />
      <Stack.Screen name={AppRoutes.DETAIL} component={DetailScreen} />
      <Stack.Screen name={AppRoutes.CART} component={CartScreen} />
    </Stack.Navigator>
  );
};

export default NativeStackNavigator;

const styles = StyleSheet.create({});
