import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormularioCompra = (props) => {
  const { total, compras } = props;
  const navigate = useNavigate();

  const [checkout, setCheckout] = useState({
    buyer: {
      email: '',
      nombre: '',
      apellido: '',
      direccion: '',
      telefono: '',
    },
    total,
    items: compras,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar la compra al servidor o realizar alguna acción específica con los datos recopilados.
    console.log(checkout);
    // Restablecer el formulario después de enviar la compra
    setCheckout({
      buyer: {
        email: '',
        nombre: '',
        apellido: '',
        direccion: '',
        telefono: '',
      },
      total,
      items: compras,
    });

    // Navegar al formulario de medio de pago
    navigate('/formulario-medio-pago');
  };

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

  return (
    <div>
      <h2>Formulario de Compra</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='text-white'>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={checkout.buyer.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='text-white'>Apellido:</label>
          <input
            type="text"
            name="apellido"
            value={checkout.buyer.apellido}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='text-white'>Email:</label>
          <input
            type="text"
            name="email"
            value={checkout.buyer.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='text-white'>Dirección:</label>
          <input
            type="text"
            name="direccion"
            value={checkout.buyer.direccion}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='text-white'>Teléfono:</label>
          <input
            type="text"
            name="telefono"
            value={checkout.buyer.telefono}
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          Siguiente
        </button>
      </form>
    </div>
  );
};

export default FormularioCompra;
