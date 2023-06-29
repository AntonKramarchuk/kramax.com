import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";

import store, { persistor } from './store/index';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {ThemeProvider} from "@mui/material";
import {BrowserRouter} from "react-router-dom";
import {theme} from './theme/Theme'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
            </PersistGate>
        </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

