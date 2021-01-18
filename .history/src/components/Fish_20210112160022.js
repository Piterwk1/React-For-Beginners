import React from 'react';
import { formatPrice } from '../helpers';

const Fish = (props) => {
  const { name, price, status, desc, image } = props.details;

  return (
    <li className="menu-fish">
      <img src={image} alt="name" />
      <h3 className="fish-name">{name}</h3>
    </li>
  );
};

export default Fish;
