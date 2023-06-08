import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import calculateTotal from '../../Context/CartContext';

const FormularioCompra = (props) => {
  const {total, compras} = props;

  const [checkoutData, setCheckoutData] = useState({
    comprador: {
      nombre: '',
      apellido: '',
      email: '',
      direccion: '',
      telefono: '',
    },
    tarjetaCredito: {
      numeroTarjeta: '',
      codigo: '',
      vencimiento: '',
      nombreTitular: '',
      apellidoTitular: '',
      dniTitular: '',
    },
  });

  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    const [formSection, field] = name.split('.');
    setCheckoutData((prevState) => ({
      ...prevState,
      [formSection]: {
        ...prevState[formSection],
        [field]: value,
      },
    }));
  };

  const handleConfirmarCompra = () => {
    const {comprador, tarjetaCredito} = checkoutData;

    // Validar campos requeridos
    if (
      !comprador.nombre ||
      !comprador.apellido ||
      !comprador.email ||
      !comprador.direccion ||
      !comprador.telefono ||
      !tarjetaCredito.numeroTarjeta ||
      !tarjetaCredito.codigo ||
      !tarjetaCredito.vencimiento ||
      !tarjetaCredito.nombreTitular ||
      !tarjetaCredito.apellidoTitular ||
      !tarjetaCredito.dniTitular
    ) {
      toast.error('Por favor, complete todos los campos del formulario');
      return;
    }
    console.log('datos del checkout ', checkoutData);
    // Mostrar la ventana modal
    setShowModal(true);
  };

  return (
    <div className='d-flex justify-content-center'>
      <div style={{width: '75%'}}>
        <h2>Resumen de Compra</h2>
        <h4 className='text-white'>Total a pagar: ${calculateTotal}</h4>

        <div className='mt-5'>
          <h2>Datos del Comprador</h2>
          <form>
            {/* Campos del comprador */}
            <div className='form-group'>
              <label className='text-white'>Nombre:</label>
              <input
                type='text'
                className='form-control'
                name='comprador.nombre'
                value={checkoutData.comprador.nombre}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='form-group'>
              <label className='text-white'>Apellido:</label>
              <input
                type='text'
                className='form-control'
                name='comprador.apellido'
                value={checkoutData.comprador.apellido}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='form-group'>
              <label className='text-white'>Email:</label>
              <input
                type='text'
                className='form-control'
                name='comprador.email'
                value={checkoutData.comprador.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='form-group'>
              <label className='text-white'>Dirección:</label>
              <input
                type='text'
                className='form-control'
                name='comprador.direccion'
                value={checkoutData.comprador.direccion}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='form-group'>
              <label className='text-white'>Teléfono:</label>
              <input
                type='text'
                className='form-control'
                name='comprador.telefono'
                value={checkoutData.comprador.telefono}
                onChange={handleInputChange}
                required
              />
            </div>
          </form>
        </div>

        <div className='mt-4'>
          <h2>Datos de Tarjeta de Crédito</h2>
          <form>
            {/* Campos de tarjeta de crédito */}
            <div className='form-group'>
              <label className='text-white'>Número de Tarjeta:</label>
              <input
                type='text'
                className='form-control'
                name='tarjetaCredito.numeroTarjeta'
                value={checkoutData.tarjetaCredito.numeroTarjeta}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='form-group'>
              <label className='text-white'>Código:</label>
              <input
                type='text'
                className='form-control'
                name='tarjetaCredito.codigo'
                value={checkoutData.tarjetaCredito.codigo}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='form-group'>
              <label className='text-white'>Vencimiento:</label>
              <input
                type='text'
                className='form-control'
                name='tarjetaCredito.vencimiento'
                value={checkoutData.tarjetaCredito.vencimiento}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='form-group'>
              <label className='text-white'>Nombre del Titular:</label>
              <input
                type='text'
                className='form-control'
                name='tarjetaCredito.nombreTitular'
                value={checkoutData.tarjetaCredito.nombreTitular}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='form-group'>
              <label className='text-white'>Apellido del Titular:</label>
              <input
                type='text'
                className='form-control'
                name='tarjetaCredito.apellidoTitular'
                value={checkoutData.tarjetaCredito.apellidoTitular}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='form-group'>
              <label className='text-white'>DNI del Titular:</label>
              <input
                type='text'
                className='form-control'
                name='tarjetaCredito.dniTitular'
                value={checkoutData.tarjetaCredito.dniTitular}
                onChange={handleInputChange}
                required
              />
            </div>
          </form>
        </div>

        <div className='d-flex mt-3 justify-content-end'>
          <button
            type='button'
            className='btn btn-primary'
            onClick={handleConfirmarCompra}
          >
            Confirmar Compra
          </button>
        </div>

        {showModal && (
          <div
            className='modal fade show'
            style={{display: 'block'}}
            tabIndex='-1'
          >
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title'>¡Compra Exitosa!</h5>
                  <button
                    type='button'
                    className='btn-close'
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className='modal-body'>
                  <p>Tu compra ha sido procesada correctamente.</p>
                  <p>¡Gracias por tu compra!</p>
                </div>
                <div className='modal-footer'>
                  <Link to='/' className='btn btn-primary'>
                    Aceptar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <ToastContainer position='bottom-right' />
      </div>
    </div>
  );
};

export default FormularioCompra;
