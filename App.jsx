import React, { useEffect } from 'react';
import AppNavigator from './src/navigation/AppNavigator.js';
import { SafeAreaView } from 'react-native';
import AppStyles from './src/ui/appStyles.js';
import { Provider, useDispatch } from 'react-redux';
import store from './src/store';
import { fetchProducts } from './src/store/slices/productSlice.js';
import { setCartItems } from './src/store/slices/cartSlice.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setFavoriteItems } from './src/store/slices/favoriteSlice.js';

const AppContent = () => {
  // Dispatch kurulumu
  const dispatch = useDispatch();

  // ! AsyncStorage içindeki "cart" dizinini sıfırlamak için çalıştır ve motrodan refresh at
  // AsyncStorage.clear();
  // ! 💡 Küçük öneri:
  // ! Gelecekte tekrar böyle bir durum olursa, clear() yerine sadece ilgili anahtarı silmek daha güvenlidir:
  // AsyncStorage.removeItem('favorites');

  const loadCart = async () => {
    // Locale den ürünleri al
    const cartJSON = (await AsyncStorage.getItem('cart')) || [];

    // Alınan ürünleri JSON dan JS e çevir
    const cartItems = JSON.parse(cartJSON);

    // Sepetteki ürünleri store'a kayıt et
    dispatch(setCartItems(cartItems));
  };

  const loadFavorites = async () => {
    // Locale den ürünleri al
    const favoriteJSON = (await AsyncStorage.getItem('favorites')) || [];

    // Alınan ürünleri JSON dan JS e çevir
    const favoriteItems = JSON.parse(favoriteJSON);

    // Sepetteki ürünleri store'a kayıt et
    dispatch(setFavoriteItems(favoriteItems));
  };

  // Bileşen yüklendiğinde store'u güncelle
  useEffect(() => {
    // API' dan alınan verileri store kayıt et
    dispatch(fetchProducts());

    loadCart();
    loadFavorites();
  }, []);

  return (
    <SafeAreaView style={AppStyles.container}>
      <AppNavigator />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
