import api from '.';

// Tüm ürünleri API'dan alacak fonksiyon
const getAllProducts = async () =>
  api.get('/products').then(response => response.data.products);

// Bir ürüne ait detay verilerini alan fonksiyon

export { getAllProducts };
