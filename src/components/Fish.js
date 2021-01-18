import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

const Fish = (props) => {
  //   const handleClick = () => {
  //     props.addToOrder(props.index);
  //   };
  const { name, price, status, desc, image } = props.details;
  const isAvailable = status === 'available';

  return (
    <li className="menu-fish">
      <img src={image} alt="name" />
      <h3 className="fish-name">
        {name}
        <span className="price">{formatPrice(price)}</span>
      </h3>
      <p>{desc}</p>
      <button
        onClick={() => props.addToOrder(props.index)}
        disabled={!isAvailable}
      >
        {isAvailable ? 'Add to Cart' : 'Sold Out!'}
      </button>
    </li>
  );
};

Fish.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string,
    status: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
  }),
  addToOrder: PropTypes.func,
};

export default Fish;
