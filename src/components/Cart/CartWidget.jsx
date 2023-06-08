import React from 'react';
import {Link} from 'react-router-dom';
import {useCart} from '../../Context/CartContext';
import './cartstyles.css';

const CartWidget = () => {
  const {cartItems} = useCart();

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className='cart-widget'>
      <Link to='/carrito' className='cart-link'>
        <i className='fas fa-shopping-cart'></i>
        <span className='cart-count'>{getTotalQuantity()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
