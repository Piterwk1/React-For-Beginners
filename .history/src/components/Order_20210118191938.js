import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { formatPrice } from '../helpers';

const Order = (props) => {
  const renderOrder = (key) => {
    const fish = props.fishes[key];
    const count = props.order[key];
    // const isAvailable = fish.status === 'available';
    const isAvailable = fish && fish.status === 'available';
    // with firebase
    const transitionOptions = {
      classNames: 'order',
      key,
      timeout: { enter: 500, exit: 500 },
    };

    // with firebase
     (!fish) return null;

  };

  const orderId = Object.keys(props.order);

  const total = orderId.reduce((prevTotal, key) => {
    const fish = props.fishes[key];
    const count = props.order[key];
    const isAvailable = fish && fish.status === 'available';
    if (isAvailable) {
      return prevTotal + count * fish.price;
    }
    return prevTotal;
  }, 0);

  return (
    <div className="order-wrap">
      <h2>Order</h2>
      <TransitionGroup component="ul" className="order">
        {orderId.map((key) => renderOrder(key))}
      </TransitionGroup>
      {/* <ul>
        {orderId.map((item) => (
          <li>{item}</li>
        ))}
      </ul> */}
      <div className="total">
        Total:
        <strong>{formatPrice(total)}</strong>
      </div>
    </div>
  );
};

Order.propTypes = {
  fishes: PropTypes.object,
  order: PropTypes.object,
  removeFromOrder: PropTypes.func,
};

export default Order;
