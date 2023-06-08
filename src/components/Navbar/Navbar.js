import React from 'react';
import {Link} from 'react-router-dom';
import ImgLogo from '../assets/image3.jpeg';
import './Navbar.css';

import CartWidget from '../Cart/CartWidget';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  return (
    <nav className='navbar-expand-lg navbar navbar-dark text-end bg-dark'>
      <div className='container letras'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <img
                className='img pulsate-bck text-white'
                src={ImgLogo}
                width='80px'
                height='80px'
                alt='Quijote'
              />
            </li>
            <NavbarItem titulo='Inicio' path='/' />
            <NavbarItem titulo='Próximos Eventos' path='/Proximoseventos' />
            <NavbarItem titulo='Imágenes' path='/Imagenes' />
            <NavbarItem
              titulo='Compra tus entradas'
              path='/Compratusentradas'
            />
            <NavbarItem titulo='Sobre Nosotros' path='/SobreNosotros' />
            <NavbarItem titulo='Contacto' path='/Contacto' />
          </ul>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link to='/carrito' className='nav-link'>
                <CartWidget />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
