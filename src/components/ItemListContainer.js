import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting, products }) => {
  const contenedorEstilo = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
  };

  const mensajeEstilo = {
    fontSize: '1.2rem',
  };

  const { id } = useParams();

  const filteredProducts = id
    ? products.filter(product => product.category === id)
    : products;

  let columnasEstilo = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    listStyle: 'none',
    padding: 0,
  };

  if (filteredProducts.length === 1) {
    columnasEstilo.justifyContent = 'center';
  } else if (filteredProducts.length === 2) {
    columnasEstilo.justifyContent = 'space-between';
  } else {
    columnasEstilo.justifyContent = 'space-between';
    columnasEstilo.width = '100%';
  }

  const columnaItemEstilo = {
    width: '30%', // Agrego para que haya margen entre las columnas
  };

  return (
    <div style={contenedorEstilo}>
      <p style={mensajeEstilo}>{greeting}</p>
      <ul style={columnasEstilo}>
        {filteredProducts.map(product => (
          <li key={product.id} style={columnaItemEstilo}>
            <h3>{product.name}</h3>
            <Link to={`/item/${product.id}`}>
              <img width={350} src={product.img} alt={product.name} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
