import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ item, removeItem }) => {
  const handleRemoveItem = () => {
    removeItem(item.productId);
  };

  return (
    <div className="col-md-4">
      <div className="card" style={{ width: '18rem' }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h5>{item.title}</h5>
          </li>
          <li className="list-group-item">Precio: {item.price}</li>
          <li className="list-group-item">Cantidad: {item.quantity}</li>
        </ul>
        <div className="card-body">
          <button className="btn btn-danger" onClick={handleRemoveItem}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  removeItem: PropTypes.func.isRequired
};

export default CartItem;
