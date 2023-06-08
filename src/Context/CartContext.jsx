import React, { createContext, useState } from 'react';

export const CartContext = createContext();
const { Provider } = CartContext;

export const useCart = () => React.useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
    console.log(`Agregado al carrito:`, product);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
    console.log(`Eliminado del carrito:`, productId);
  };

  const clearCart = () => {
    setCartItems([]);
    console.log(`Carrito vaciado.`);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseInt(item.price), 0);
  };

  return (
    <Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, calculateTotal }}
    >
      {children}
    </Provider>
  );
};

export default CartProvider;
