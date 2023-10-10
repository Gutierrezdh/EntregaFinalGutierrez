import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from "./contexts/CartContext";
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

//! Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXlJvE70Pr0F9bESNl85Angvji0AK7nMg",
  authDomain: "coderhouse-react-entrega-f4362.firebaseapp.com",
  projectId: "coderhouse-react-entrega-f4362",
  storageBucket: "coderhouse-react-entrega-f4362.appspot.com",
  messagingSenderId: "946748076296",
  appId: "1:946748076296:web:5b81c54ddc6cab22bbbcbd"
};

//! Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
