import React from "react";
import './styles.css';

import tiestoArgentina from '../components/assets/tiestoArgentina.jpg';
import martinGarrix from '../components/assets/martinGarrix.webp';
import lillyPalmer from '../components/assets/lillyPalmerEvento.jpeg';
import charlotte from '../components/assets/charlotte.jpg';

const ProximosEventos = () => {
  return (
    <div>
      <h2 className="titulos text-center tamaños-titulos-grandes">PRÓXIMOS EVENTOS</h2>
      <section>
        <div className="row row-cols-3 mover-imagenes">
          <div className="card centrar-cards mb-2 background-card" style={{ width: "18rem" }}>
            <img src={tiestoArgentina} className="card-img-top" alt="100px" />
            <div className="card-body">
              <p className="text-white fs-6 text">Tiesto, también conocido como Tijs Michiel Verwest, es un famoso DJ y productor de música electrónica holandés. Ha sido clasificado en varias ocasiones como el DJ número uno del mundo según la revista DJ Mag. Su estilo musical abarca diversos géneros como el trance, house y EDM.</p>
            </div>
          </div>
          <div className="card centrar-cards mb-2 background-card" style={{ width: "18rem" }}>
            <img src={martinGarrix} className="card-img-top" alt="100px" />
            <div className="card-body">
              <p className="text-white fs-6 text">Martin Garrix, cuyo nombre real es Martijn Gerard Garritsen, es un DJ y productor musical neerlandés. A una edad temprana, Garrix se interesó por la música electrónica y comenzó a producir sus propias canciones. Se hizo ampliamente conocido por su sencillo "Animals", que se convirtió en un éxito internacional en 2013. Ha sido clasificado como el DJ número uno del mundo en el ranking DJ Mag Top 100 en 2016 y</p>
            </div>
          </div>
          <div className="card centrar-cards mb-2 background-card" style={{ width: "18rem" }}>
            <img src={lillyPalmer} className="card-img-top" alt="100px" />
            <div className="card-body">
              <p className="text-white fs-6 text">Lilly Palmer es una de las referentes del techno hoy en día, con una carrera corta pero con mucho que contar. A pocas semanas del comienzo de Resistance en Latinoamérica, la DJ habló con DJMAGLA sobre su último lanzamiento, su pasión por la música y qué es ser mujer en la industria.</p>
            </div>
          </div>
          <div className="card centrar-cards mb-2 background-card" style={{ width: "18rem" }}>
            <img src={charlotte} className="card-img-top" alt="100px" />
            <div className="card-body">
              <p className="text-white fs-6 text">Charlotte de Witte es una DJ y productora discográfica belga. Su estilo es un techno de marcada tendencia minimal, así como influencias del ácido.​ Al inicio de su carrera pinchaba con alias de Raving George. Es la fundadora de su propio sello KNTXT.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProximosEventos;
