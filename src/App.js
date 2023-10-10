import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Cart } from "./components/Cart";
import { CartProvider } from "./contexts/CartContext";
import {  getFirestore,  collection,  getDocs,} from "firebase/firestore";

const App = () => {
  const estiloCentrado = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const [firebaseProducts, setFirebaseProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const productsCollection = collection(db, "items");
      
      try {
        const querySnapshot = await getDocs(productsCollection);
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setFirebaseProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <CartProvider>
    <BrowserRouter>
      <div>
        <h1 style={estiloCentrado}>Bienvenido a MelodyMarket</h1>

        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                greeting="¡Esperamos que disfrutes de nuestra tienda!"
                products={firebaseProducts}
              />
            }
          />
          <Route
            path="/category/:id"
            element={
              <ItemListContainer
                greeting="¡Esperamos que disfrutes de nuestra tienda!"
                products={firebaseProducts}
              />
            }
          />
          <Route
            path="/item/:id"
            element={<ItemDetailContainer products={firebaseProducts} />}            
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </div>
    </BrowserRouter>
    </CartProvider>
  );
};

export default App;
