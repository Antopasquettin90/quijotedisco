import React from 'react';
import './styles.css';

import video from '../components/assets/tomorrowland-comprimido.mp4';

const Inicio = () => {
  return (
    <div>
      <h1 className='text-white text-center tracking-in-contract-bck-top estilo-letra'>
        30 AÑOS HACIENDO HISTORIA
      </h1>
      <main id='hero'>
        <div className='capa'>
          <video muted autoPlay loop>
            <source src={video} type='video/mp4' />
          </video>
        </div>
      </main>
    </div>
  );
};

export default Inicio;
