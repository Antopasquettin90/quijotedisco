import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MedioDePago = () => {
  const navigate = useNavigate();

  const [checkout, setCheckout] = useState({
    buyer: {
      nombre: '',
      apellido: '',
      tarjeta: '',
      codigo: '',
      vencimiento: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCheckout((prevState) => ({
      ...prevState,
      buyer: {
        ...prevState.buyer,
        [name]: value,
      },
    }));
  };

  const handleSiguiente = () => {
    // Navegar al formulario de confirmación final de compra
    navigate('/finalizar-compra');
  };

  return (
    <div>
      <h2>Formulario de Medio de Pago</h2>
      <form>
        <div>
          <label className='text-white'>Nombre del titular:</label>
          <input
            type="text"
            name="nombre"
            value={checkout.buyer.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='text-white'>Apellido del titular:</label>
          <input
            type="text"
            name="apellido"
            value={checkout.buyer.apellido}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='text-white'>Número de tarjeta:</label>
          <input
            type="text"
            name="tarjeta"
            value={checkout.buyer.tarjeta}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='text-white'>Código de tres dígitos:</label>
          <input
            type="text"
            name="codigo"
            value={checkout.buyer.codigo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='text-white'>Fecha de Vencimiento:</label>
          <input
            type="text"
            name="vencimiento"
            value={checkout.buyer.vencimiento}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={handleSiguiente}>
          Siguiente
        </button>
      </form>
    </div>
  );
};

export default MedioDePago;
