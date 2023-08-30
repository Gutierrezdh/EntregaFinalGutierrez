import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetailContainer = ({ products }) => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setProduct(products.find(product => product.id === id));
  }, [id, products]);

  if (!product) return <div>Cargando...</div>;

  const detalleEstilo = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
  };

  const imagenEstilo = {
    display: 'block',
    margin: '0 auto',
  };

  return (
    <main style={detalleEstilo}>
      <h1>Detalle del producto:</h1>
      <h2>{product.name}</h2>
      <Link to={`/item/${product.id}`}>
        <img style={imagenEstilo} width={350} src={product.img} alt={product.name} />
      </Link>
      <p>Precio: {product.price}</p>
      <p>{product.description}</p>
    </main>
  );
};

export default ItemDetailContainer;
