//no lo utilizo por ahora porque no puedo implementar la logica.

import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const initialProductDetails = {
    '1': {
      url: '1',
      title: 'Producto 1',
      image: 'url_imagen_1',
      prices: {
        general: 10,
        vip: 20
      },
      quantity: {
        general: 5,
        vip: 10
      }
    },
    '2': {
      url: '2',
      title: 'Producto 2',
      image: 'url_imagen_2',
      prices: {
        general: 15,
        vip: 25
      },
      quantity: {
        general: 8,
        vip: 12
      }
    },
    // Agrega más productos aquí si es necesario
  };

  const [productDetails, setProductDetails] = useState(initialProductDetails);

  return (
    <ProductContext.Provider value={{ productDetails, setProductDetails }}>
      {children}
    </ProductContext.Provider>
  );
};
