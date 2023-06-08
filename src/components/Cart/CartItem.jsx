import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ item, removeItem }) => {
  const handleRemoveItem = () => {
    removeItem(item.id);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">Precio: {item.price}</p>
        <p className="card-text">Cantidad: {item.quantity}</p>
        <button className="btn btn-danger" onClick={handleRemoveItem}>Eliminar</button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  removeItem: PropTypes.func.isRequired
};

export default CartItem;
