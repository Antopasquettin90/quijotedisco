import React from 'react';
import Item from './Item';

const ItemList = ({ cards }) => {
  return (
    <div>
      {cards.map((card) => (
        <div key={card.id}>
          <Item
            title={card.title}
            image={card.image}
            description={card.description}
            price={card.price}
            quantity={card.quantity}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
