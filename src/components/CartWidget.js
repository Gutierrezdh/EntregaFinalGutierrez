import React from 'react';
import carrito from './carrito.png'; 



const CartWidget = () => {
return (
    <div className="cart-widget" style={contenedorEstilo}>     
        <img src={carrito} alt="Carrito" style={imagenEstilo} />      
        <span className="notification" style={notificacionEstilo}>0</span>
    </div>
);
};


const contenedorEstilo = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '85%',   
};

const imagenEstilo = {
    width: '80px',
    height: '50%',
    marginRight: '5px',
    opacity: '1',

};

const notificacionEstilo = {
    backgroundColor: 'red',
    color: 'white',
    padding: '2px 6px',
    borderRadius: '50%',
    fontSize: '14px',
};

export default CartWidget;