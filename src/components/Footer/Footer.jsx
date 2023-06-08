import React from 'react';
import './footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <section className="mt-4 container-fluid text-center bg-dark">
      <div className="row align-items-start text-white h3">
        <div className="mt-5 col m-2">
          <p>© 2023 Quijote Disco/Bar All Rights Reserved.</p>
        </div>
        <div className="col m-5">
          <a
            href="https://www.instagram.com/quijotedisco/"
            className="h3 text-decoration text-white"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://twitter.com/QuijoteDiscoBar"
            className="h3 text-decoration text-white"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.facebook.com/quijotedisco"
            className="h3 text-decoration text-white"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="..."
            className="h3 text-decoration text-white"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
