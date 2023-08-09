import React from 'react';

const ItemListContainer = (props) => {
    const contenedorEstilo = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
    };

    const mensajeEstilo = {
    fontSize: '1.2rem',
    };

return (
    <div style={contenedorEstilo}>
        <p style={mensajeEstilo}>{props.greeting}</p>
    </div>
    );
};

export default ItemListContainer;