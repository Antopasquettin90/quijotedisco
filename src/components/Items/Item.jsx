import React from 'react';

const Item = ({ title, image, description, price, quantity }) => {
  return (
    <div>
      <h2>Item</h2>
      <p>Title: {title}</p>
      <p>Image: {image}</p>
      <p>Description: {description}</p>
      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p>
      <p>Total Price: {price * quantity}</p>
    </div>
  );
};

export default Item;
