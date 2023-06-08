import React from 'react';
import PropTypes from 'prop-types';
import './card.css';
import { Link } from 'react-router-dom';

function Card({ imageSource, title, url, prices, quantity, description }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className='color-sub1'>Precio General: {prices.general}</p>
        <p className='color-sub1'>Precio VIP: {prices.vip}</p>
        <p> {description}</p>
        <div className="button-container">
          <Link to={`/product/${url}/details`}>
            <button className="btn btn-outline-secondary border-0">Ver más detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageSource: PropTypes.string,
  url: PropTypes.string,
  prices: PropTypes.shape({
    general: PropTypes.number,
    vip: PropTypes.number
  }),
  quantity: PropTypes.shape({
    general: PropTypes.number,
    vip: PropTypes.number
  }),
  description: PropTypes.string,
};

export default Card;
