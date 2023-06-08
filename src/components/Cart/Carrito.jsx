import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './cartstyles.css';
import { CartContext } from '../../Context/CartContext';
import CartItem from './CartItem';

const Carrito = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, calculateTotal } = useContext(CartContext);
  const navigate = useNavigate();
  const [isCompraFinalizada, setCompraFinalizada] = useState(false);
  const total = calculateTotal();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleFinalizarCompra = () => {
    // Lógica para finalizar la compra
    setCompraFinalizada(true);
    // Enviar los datos del carrito al servidor
    // y redirigir al usuario a una página de confirmación o agradecimiento.
    navigate('/finalizar-compra'); // Redirigir al formulario de compra
  };

  const handleVolverAtras = () => {
    navigate(-1);
  };

  return (
    <div className='container'>
      <h2 className='titulo-carrito'>Carrito de compras</h2>
      {Object.keys(cartItems).length > 0 ? (
        <div>
          {Object.keys(cartItems).map((productId) => {
            const item = cartItems[productId];
            return (
              <CartItem
                key={productId}
                item={item}
                removeItem={removeFromCart}
              />
            );
          })}
          <hr />
          <p className='text-white text-center fs-3'>Total: {total}</p>
          <hr />
          <div className='buttons-container'>
            <button
              className='btn btn-outline-secondary border-0 text-white'
              onClick={clearCart}
            >
              Vaciar el carrito
            </button>
            <Link
              className='btn btn-outline-secondary border-0 text-white'
              to='/compratusentradas'
            >
              Seguir comprando
            </Link>
            <button
              className='btn btn-outline-secondary border-0 text-white'
              onClick={handleFinalizarCompra}
            >
              Finalizar Compra
            </button>
            <button
              className='btn btn-outline-secondary border-0 text-white'
              onClick={handleVolverAtras}
            >
              Volver atrás
            </button>
          </div>
          {isCompraFinalizada ? (
            <div>
              <h3>¡Compra finalizada!</h3>
              <p>
                Gracias por tu compra. Recibirás un correo electrónico con los detalles de tu pedido.
              </p>
            </div>
          ) : null}
        </div>
      ) : (
        <div className='text-center text-white'>
          <hr className='transparent' />
          No hay productos en el carrito.
          <hr className='transparent' />
          <div className='button-container'>
            <button
              className='btn btn-outline-secondary border-0 text-white'
              onClick={handleVolverAtras}
            >
              Volver atrás
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
