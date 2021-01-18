import React from 'react';

const Fish = (props) => (
  <li className="menu-fish">
    <img src={props.details.image} alt="" />
  </li>
);

export default Fish;
