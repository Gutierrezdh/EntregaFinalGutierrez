import React, { useState } from "react";


const ItemCount = ({ onAdd, stock }) => {
  const [count, setCount] = useState(1);

  const handleDecreaseCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const handleIncreaseCount = () => {
    if (stock > count) {
      setCount((prev) => prev + 1);
    }
  };

  // Agrega estos console.log para depurar
  console.log("count:", count);
  console.log("stock:", stock); 

  return (
    <div className="itemCount">
      <button className="countButton" onClick={handleDecreaseCount}>
        -
      </button>
      <span>{count}</span>
      <button className="countButton" onClick={handleIncreaseCount}>
        +
      </button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
