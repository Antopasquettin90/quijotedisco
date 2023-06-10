import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ item}) => {

  return (
    <div class="card" style={{width: '18rem'}}>
    <div className="card">
      <div className="card-body">
        <h5 className="list-group list-group-flush">{item.title}</h5>
        <p className="list-group-item">Precio: {item.price}</p>
        <p className="list-group-item">Cantidad: {item.quantity}</p>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,

};

export default CartItem;
