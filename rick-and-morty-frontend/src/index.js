import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// Performans ölçümlerini yapmak istiyorsanız, sonuçları kaydetmek için bir fonksiyonu geçin (örneğin: reportWebVitals(console.log))
// veya bir analitik uç noktasına gönderin. Daha fazla bilgi için: https://bit.ly/CRA-vitals
reportWebVitals();
