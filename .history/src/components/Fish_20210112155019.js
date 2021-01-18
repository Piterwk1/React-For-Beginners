import React from 'react';

const { name, price, status, desc, image } = props.details;

const Fish = (props) => (
  <li className="menu-fish">
    <img src={image} alt="" />
  </li>
);

export default Fish;
