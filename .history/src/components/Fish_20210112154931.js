import React from 'react';

const Fish = (props) => (

    const { name, price, status, desc, image } = props.details;

  <li className="menu-fish">
    <img src={props.details.image} alt="" />
  </li>
);

export default Fish;
