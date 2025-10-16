import axios from 'axios';

// Axios kullanarak API işlemleri yapacağımız metod oluştur.
const api = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 5000,
  timeoutErrorMessage: 'API işlemi sırasında hata oluştu.',
});

export default api;
