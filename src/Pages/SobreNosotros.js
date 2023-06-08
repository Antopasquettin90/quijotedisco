import React from 'react';
import './styles.css';
import cazuela from "../components/assets/cazuela_fotor.jpg";
import gin from "../components/assets/gin_fotor.jpg";

const SobreNosotros = () => {
  return (
    <div>
      <div>
        <h2 className="text-center titulos color-titulos tamaños-titulos-grandes">EL BAR</h2>
      </div>

      <div className="container-fluid text-center tamaños-letras-chicos">
        <p className="mt-3 subtitulos text-white text-center custom-element tamaños-letras-grandes roll-in-top">
          Primero cenamos, luego bailamos.
        </p>
        <p className="subtitulos1 text-white text-center custom-element tamaños-letras-chicos roll-in-top">
          Empieza la noche en <em>Quijote Bar</em>,
          <br />
          donde te esperan exquisitos platos que explotan de sabor
          <br />
          además de cócteles clásicos y creativos.
        </p>
      </div>

      <hr className="text-warning borde m-5" />

      <div className="container-fluid text-center">
        <div className="row align-items-start text-white tamaños-letras-chicas">
          <div className="col separar1 roll-in-left">
            <img src={cazuela} height="250px" width="400px" className="rounded mx-auto d-block" alt="Cazuela" />
          </div>
          <div className="col">
            <p className="text-white tamaños-letras-grandes roll-in-right">Cocina Tradicional</p>
            <p className="tamaños-letras-chicas text-white text-center roll-in-right">
              Las mejores pizzas, cazuelas y por supuesto el tradicional y mejor lomito de la zona.
            </p>
          </div>
        </div>
      </div>

      <hr className="text-warning borde m-5" />

      <div className="container-fluid text-center">
        <div className="row align-items-start text-white">
          <div className="col">
            <p className="text-white tamaños-letras-grandes roll-in-left">Coctelería de primera</p>
            <p className="text-white text-center tamaños-letras-chicas roll-in-left">
              Tentadoras delicias como el "Baileys con helado", el "Gancia Primavera" o nuestros tragos con Gin y frutas,
              así como otras combinaciones impecables de sabores frescos o dulces te esperan.
            </p>
          </div>
          <div className="col roll-in-right">
            <img src={gin} height="250px" width="400px" className="rounded mx-auto d-block" alt="Gin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;
