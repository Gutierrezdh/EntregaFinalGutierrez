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
        fontSize: "14px", // Tamaño de fuente para el número
    };

    const imgStyle = {
        width: "100px", // Tamaño de la imagen
        marginRight: "2px", // Espacio entre la imagen y el número
    };

    return (
        <Link to="/cart" style={buttonStyle}>
            <img src={carrito} alt="Cart" style={imgStyle} />
            <span>{totalWidget}</span>
        </Link>
    );
};

export default CartWidget;
