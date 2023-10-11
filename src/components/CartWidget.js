import React from 'react';
import carrito from './carrito.png'; 
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const CartWidget = () => {
    const { totalWidget } = useContext(CartContext);

    // Estilos para el botón
    const buttonStyle = {
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        fontSize: "14px", 
    };

    const imgStyle = {
        width: "100px", 
        marginRight: "2px", 
    };

    return (
        <Link to="/cart" style={buttonStyle}>
            <img src={carrito} alt="Cart" style={imgStyle} />
            <span>{totalWidget}</span>
        </Link>
    );
};

export default CartWidget;
