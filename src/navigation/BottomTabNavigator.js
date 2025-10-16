import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppRoutes from './routes';
import NativeStackNavigator from './StackNavigator';
import OrdersScreen from '../screens/orders';
import FavoriteScreen from '../screens/favorites';
import ProfileScreen from '../screens/profile';
import TabIcons from './tabIcon';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <TabIcons route={route} focused={focused} />
        ),
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen name={AppRoutes.TAB} component={NativeStackNavigator} />
      <Tab.Screen name={AppRoutes.ORDERS} component={OrdersScreen} />
      <Tab.Screen name={AppRoutes.FAVORITES} component={FavoriteScreen} />
      <Tab.Screen name={AppRoutes.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
