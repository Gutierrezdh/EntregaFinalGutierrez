import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

import products from './components/data/products.json';

const App = () => {
  const estiloCentrado = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <BrowserRouter>
      <div>
        <h1 style={estiloCentrado}>Bienvenido a MelodyMarket</h1>

        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Esperamos que disfrutes de nuestra tienda!" products={products} />} />
          <Route path="/category/:id" element={<ItemListContainer greeting="¡Esperamos que disfrutes de nuestra tienda!" products={products} />} />
          <Route path="/item/:id" element={<ItemDetailContainer products={products} />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
