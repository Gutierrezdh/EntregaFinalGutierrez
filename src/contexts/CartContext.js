import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    
    const addItem = (product, quantity) => {
    const alreadyExists = items.some((item) => item.id === product.id);

    if (!alreadyExists) setItems((prev) => [...prev, { ...product, quantity }]);
    else {
        const updateProducts = items.map((item) => {
        if (item.id === product.id)
            return {
            ...item,
            quantity: item.quantity + quantity,
        };
        else return item;
    });
    setItems(updateProducts);
    }
};

const totalWidget = items.reduce((act, val) => act + val.quantity, 0);

const removeItem = (id) => {
    const itemsfiltered = items.filter((item) => item.id !== id);
    setItems(itemsfiltered);
};

const clear = () => setItems([]);
    return (
    <CartContext.Provider value={{ addItem, items, removeItem, clear, totalWidget }}>
    {children}
    </CartContext.Provider>
    );
};

