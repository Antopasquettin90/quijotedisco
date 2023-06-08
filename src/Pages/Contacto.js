import React from 'react';
import './styles.css';

const Contacto = () => {
  return (
    <div>
      <div>
        <h2 className="titulos text-center tamaños-titulos-grandes">CONTACTO</h2>
      </div>

      <p className="subtitulos tamaños-letras-chicas text-center text-white">Dejanos tus datos</p>

      <div className="container">
        <form action="https://formspree.io/f/xlekepww" method="POST">
          <div className="row">
            <div className="col-6">
              <label htmlFor="fname" className="form-label text-white">Nombre:</label>
              <input type="text" className="form-control" id="fname" name="fname" placeholder="Nombre" />
            </div>
            <div className="col-6">
              <label htmlFor="lname" className="form-label text-white">Apellido:</label>
              <input type="text" className="form-control" id="lname" name="lname" placeholder="Apellido" />
            </div>
            <div className="col-6">
              <label htmlFor="email" className="form-label text-white">Mail:</label>
              <input type="email" className="form-control" id="email" name="email" placeholder="email" />
            </div>
            <div className="col-6">
              <label htmlFor="tel" className="form-label text-white">Telefono:</label>
              <input type="tel" className="form-control" id="tel" name="tel" placeholder="Telefono" />
            </div>
            <div className="col-12">
              <label htmlFor="w3review" className="form-label text-white">Comentarios:</label>
              <textarea id="w3review" className="form-control" name="w3review" placeholder="Dejanos un comentario" rows="5" cols="40" />
            </div>
            <div className="mt-3 col-12">
              <input type="submit" className="btn btn-danger color-boton" value="Enviar" />
            </div>
          </div>
        </form>

        <div className="mt-3 col-12 text-center">
        <iframe
        title="Mapa de ubicación"
        className="special-inframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.6697039094465!2d-64.5892554554906!3d-34.839396200529535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95dab892b9dadc81%3A0xc30d23496dcd8c25!2sAv.%20M%20Espinoza%20240%2C%20Villa%20Huidobro%2C%20C%C3%B3rdoba!5e0!3m2!1sen!2sar!4v1623428186814!5m2!1sen!2sar"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        ></iframe>
       </div>
      </div>
    </div>
  );
}

export default Contacto;
