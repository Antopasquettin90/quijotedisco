import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Products/products.css';
import image1 from '../assets/image1.jpg';
import { useCart } from '../../Context/CartContext';

const productDetails = {
  'producto-1': {
    id: 1,
    title: 'Sabado 1/07/2023',
    image: image1,
    url: 'producto-1',
    category: 'Julio',
    description: 'Descripción del evento 1',
    price: 800,
    quantity: 800,
    initialQuantity: 800,
  },
  // Resto de los productos...
};

const ItemDetailsProduct = () => {
  const { id } = useParams();
  const selectedProduct = productDetails[id];
  const [quantity, setQuantity] = useState(1);
  const { addToCart, cartItems, removeFromCart } = useCart();

  useEffect(() => {
    return () => {
      // Restablecer el stock cuando se desmonta el componente o se vacía el carrito
      if (cartItems.length === 0) {
        productDetails[id].quantity = productDetails[id].initialQuantity;
      }
    };
  }, [cartItems, id]);

  const handleAddToCart = () => {
    const product = {
      id: selectedProduct.url,
      title: selectedProduct.title,
      price: selectedProduct.price,
      quantity: quantity,
    };

    addToCart(product);
    updateStock(quantity);
  };

  const updateStock = (quantity) => {
    const updatedProduct = { ...selectedProduct };
    updatedProduct.quantity -= quantity;
    productDetails[id] = updatedProduct;
  };

  const handleQuantityChange = (value) => {
    if (
      quantity + value >= 1 &&
      quantity + value <= selectedProduct.quantity
    ) {
      setQuantity(quantity + value);
    }
  };

  const handleRemoveFromCart = () => {
    removeFromCart(selectedProduct.url);
    updateStock(-quantity); // Restablecer el stock del producto al carrito
  };

  return (
    <div className="letras">
      {selectedProduct ? (
        <div>
          <h2 className="titulo-producto">
            Detalles del producto con ID: {id}
          </h2>
          <div className="product-details">
            <div className="product-image">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="small-image"
              />
            </div>
            <div className="product-info">
              <p>Precio: ${selectedProduct.price}</p>
              <p>Stock disponible: {selectedProduct.quantity}</p>
              <p>Descripción: {selectedProduct.description}</p>
              <div>
                <label>Cantidad:</label>
                <button onClick={() => handleQuantityChange(-1)}>-</button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
                <button onClick={() => handleQuantityChange(1)}>+</button>
              </div>
              <button onClick={handleAddToCart}>Agregar al carrito</button>
              <button onClick={handleRemoveFromCart}>Eliminar del carrito</button>
            </div>
          </div>
          <Link to="/">Volver a la página principal</Link>
        </div>
      ) : (
        <div>
          <h2>Producto no encontrado</h2>
        </div>
      )}
    </div>
  );
};

export default ItemDetailsProduct;
