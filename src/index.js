import React from 'react';
import ReactDOM from 'react-dom/client';
import 'styles/global.css';
import App from 'components/App';
import { Provider } from 'react-redux';
import store from 'redux/store';
import 'index.css';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
