import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from "@material-ui/core/styles";
import "@fontsource/quicksand";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/common/index.scss';


import { I18nextProvider } from 'react-i18next';
import i18n from '../src/config/i18n';
import theme from './config/theme';

import App from './App';

import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <StylesProvider injectFirst>
            <I18nextProvider i18n={i18n}>
              <App />
            </I18nextProvider>
          </StylesProvider>
        </ThemeProvider>
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
