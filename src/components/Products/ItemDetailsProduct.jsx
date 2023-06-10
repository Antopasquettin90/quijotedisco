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
    description: '¡No te pierdas la experiencia inigualable en QUIJOTE DISCO VILLA HUIDOBRO con nuestra entrada Obtene acceso a nuestra pista de baile, el bar y zonas de descanso. Además, tu entrada incluye una consumición para que disfrutes de una refrescante bebida mientras bailas al ritmo de la mejor música. Además, si hay un espectáculo especial esa noche, tendrás derecho a presenciarlo y deleitarte con una experiencia única. ¡Compra tu entrada ahora y prepárate para una noche llena de diversión y entretenimiento en uno de los mejores boliches de Villa Huidobro!',
    price: 800,
    quantity: 800,
    initialQuantity: 800,
  },
  'producto-2': {
    id: 2,
    title: 'Sabado 15/07/2023',
    image: image1,
    url: 'producto-2',
    category: 'Julio',
    description: '¡No te pierdas la experiencia inigualable en QUIJOTE DISCO VILLA HUIDOBRO con nuestra entrada Obtene acceso a nuestra pista de baile, el bar y zonas de descanso. Además, tu entrada incluye una consumición para que disfrutes de una refrescante bebida mientras bailas al ritmo de la mejor música. Además, si hay un espectáculo especial esa noche, tendrás derecho a presenciarlo y deleitarte con una experiencia única. ¡Compra tu entrada ahora y prepárate para una noche llena de diversión y entretenimiento en uno de los mejores boliches de Villa Huidobro!',
    price: 2000,
    quantity: 900,
    initialQuantity: 900,
  },
  'producto-3': {
    id: 3,
    title: 'Sabado 5/08/2023',
    image: image1,
    url: 'producto-3',
    category: 'Agosto',
    description: '¡No te pierdas la experiencia inigualable en QUIJOTE DISCO VILLA HUIDOBRO con nuestra entrada Obtene acceso a nuestra pista de baile, el bar y zonas de descanso. Además, tu entrada incluye una consumición para que disfrutes de una refrescante bebida mientras bailas al ritmo de la mejor música. Además, si hay un espectáculo especial esa noche, tendrás derecho a presenciarlo y deleitarte con una experiencia única. ¡Compra tu entrada ahora y prepárate para una noche llena de diversión y entretenimiento en uno de los mejores boliches de Villa Huidobro!',
    price: 800,
    quantity: 500,
    initialQuantity: 500,
  },
  'producto-4': {
    id: 4,
    title: 'Sabado 12/08/2023',
    image: image1,
    url: 'producto-4',
    category: 'Agosto',
    description: '¡No te pierdas la experiencia inigualable en QUIJOTE DISCO VILLA HUIDOBRO con nuestra entrada Obtene acceso a nuestra pista de baile, el bar y zonas de descanso. Además, tu entrada incluye una consumición para que disfrutes de una refrescante bebida mientras bailas al ritmo de la mejor música. Además, si hay un espectáculo especial esa noche, tendrás derecho a presenciarlo y deleitarte con una experiencia única. ¡Compra tu entrada ahora y prepárate para una noche llena de diversión y entretenimiento en uno de los mejores boliches de Villa Huidobro!',
    price: 3000,
    quantity: 500,
    initialQuantity: 500,
  },
  'producto-5': {
    id: 5,
    title: 'Sabado 2/09/2023',
    image: image1,
    url: 'producto-5',
    category: 'Septiembre',
    description: '¡No te pierdas la experiencia inigualable en QUIJOTE DISCO VILLA HUIDOBRO con nuestra entrada Obtene acceso a nuestra pista de baile, el bar y zonas de descanso. Además, tu entrada incluye una consumición para que disfrutes de una refrescante bebida mientras bailas al ritmo de la mejor música. Además, si hay un espectáculo especial esa noche, tendrás derecho a presenciarlo y deleitarte con una experiencia única. ¡Compra tu entrada ahora y prepárate para una noche llena de diversión y entretenimiento en uno de los mejores boliches de Villa Huidobro!',
    price: 1500,
    quantity: 1000,
    initialQuantity: 1000,
  },
  'producto-6': {
    id: 6,
    title: 'Sabado 9/09/2023',
    image: image1,
    url: 'producto-6',
    category: 'Septiembre',
    description: '¡No te pierdas la experiencia inigualable en QUIJOTE DISCO VILLA HUIDOBRO con nuestra entrada Obtene acceso a nuestra pista de baile, el bar y zonas de descanso. Además, tu entrada incluye una consumición para que disfrutes de una refrescante bebida mientras bailas al ritmo de la mejor música. Además, si hay un espectáculo especial esa noche, tendrás derecho a presenciarlo y deleitarte con una experiencia única. ¡Compra tu entrada ahora y prepárate para una noche llena de diversión y entretenimiento en uno de los mejores boliches de Villa Huidobro!',
    price: 4000,
    quantity: 700,
    initialQuantity: 700,
  },
};

const ItemDetailsProduct = () => {
  const { id } = useParams();
  const selectedProduct = productDetails[id];
  const [quantity, setQuantity] = useState(1);
  const { addToCart, cartItems } = useCart();

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

  return (
    <div className='letras'>
      {selectedProduct ? (
        <div>
          <h2 className='titulo-producto'>Entradas:</h2>
          <div className='product-details'>
            <div className='product-image'>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className='small-image'
              />
            </div>
            <div className='product-info'>
              <p>Precio: ${selectedProduct.price}</p>
              <p>Stock disponible: {selectedProduct.quantity}</p>
              <div>
                <label>Cantidad:</label>
                <button
                  className='btn btn-danger color-boton'
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </button>
                <input
                  type='number'
                  min='1'
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
                <button
                  className='btn btn-danger color-boton'
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
              <button
                className='btn btn-danger color-boton'
                onClick={handleAddToCart}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
          <p className='p-3'>Descripción: {selectedProduct.description}</p>
          <Link className='btn btn-danger color-boton' to='/'>
            Volver a la página principal
          </Link>
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
