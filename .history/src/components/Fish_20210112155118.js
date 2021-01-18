import React from 'react';

const { name, price, status, desc, image } = props.details;

const Fish = (props) => {
  <li className="menu-fish">
    <img src={props.details.image} alt="" />
  </li>;
};

export default Fish;
