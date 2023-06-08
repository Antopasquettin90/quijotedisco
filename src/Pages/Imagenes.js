import React from 'react';
import './styles.css';
import imagen1 from '../../src/components/assets/quijote1_fotos.jpg';
import imagen2 from '../../src/components/assets/quijote2_fotor.jpg';
import imagen3 from '../../src/components/assets/quijote3_fotor.jpg';
import imagen4 from '../../src/components/assets/quijote4_fotor.jpg';
import imagen5 from '../../src/components/assets/quijote5_fotor.jpg';
import imagen6 from '../../src/components/assets/quijote6_fotor.jpg';

const Imagenes = () => {
  return (
    <div>
      <div>
        <h2 className="titulos text-center tamaños-titulos-grandes">IMÁGENES</h2>
      </div>
      <div className="separar container-fluid text-center">
        <div className="row align-items-start text-white tamaños-letras-chicas">
          <div className="col mt-4">
            <img src={imagen1} height="250px" width="" 
            className="img-fluid tilt-in-fwd-tr" alt="Imagen 1" />
          </div>
          <div className="col-6 mt-4">
            <img src={imagen2} height="250px" width="" 
            className="img-fluid tilt-in-fwd-tr" alt="Imagen 2" />
          </div>
          <div className="col-6 mt-4">
            <img src={imagen3} height="250px" width="" 
            className="img-fluid tilt-in-fwd-tr" alt="Imagen 3" />
          </div>
          <div className="col-6 mt-4">
            <img src={imagen4} height="250px" width="" 
            className="img-fluid tilt-in-fwd-tr" alt="Imagen 4" />
          </div>
          <div className="col-6 mt-4">
            <img src={imagen5} height="250px" width="" className="img-fluid tilt-in-fwd-tr" alt="Imagen 5" />
          </div>
          <div className="col-6 mt-4">
            <img src={imagen6} height="250px" width="" 
            className="img-fluid tilt-in-fwd-tr" alt="Imagen 6" />
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col mt-4">
              <p className="vibrate-5 tamaños-letras-chicas text-white text-center">
                Buscate en nuestros álbumes de fotos
              </p>
              <button
                onClick={() => window.location.href = "https://www.facebook.com/quijotedisco/photos/?ref=page_internal&tab=album"}
              className="fa-brands fa-facebook btn btn-outline-secondary border-0 vibrate-5">
                        Click aqui para mas fotos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Imagenes;
