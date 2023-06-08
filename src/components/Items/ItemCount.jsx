import React, { useState } from 'react';

const ItemCount = ({ initial, min, max, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    onAdd(count);
  };

  return (
    <div>
      <div>
        <button className="btn btn-outline-secondary border-0" onClick={handleDecrement}>
          -
        </button>
        <span>{count}</span>
        <button className="btn btn-outline-secondary border-0" onClick={handleIncrement}>
          +
        </button>
      </div>
      <button className="btn btn-outline-secondary border-0 btn-add-to-cart" onClick={handleAdd}>
        Agregar al carrito
      </button>
      <button className="btn btn-outline-secondary border-0 btn-remove-from-cart" onClick={() => onAdd(-count)}>
        Quitar del carrito
      </button>
    </div>
  );
};

export default ItemCount;