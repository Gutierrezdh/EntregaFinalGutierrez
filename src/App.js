import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


const App = () => {
  const estiloCentrado = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div>
      <h1 style={estiloCentrado}>Bienvenido a MelodyMarket</h1>
      <NavBar/>
      <ItemListContainer greeting="¡Esperamos que disfrutes de nuestra tienda!"/>

    </div>
  );
};

export default App;
