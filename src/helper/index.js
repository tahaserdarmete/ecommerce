import AsyncStorage from '@react-native-async-storage/async-storage';

// LocaleStroage'a kayıt yapacak fonksiyon
const saveCardToStorage = items => {
  AsyncStorage.setItem('cart', JSON.stringify(items));
};

const saveFavoritesToStorage = items => {
  AsyncStorage.setItem('favorites', JSON.stringify(items));
};

export { saveCardToStorage, saveFavoritesToStorage };
