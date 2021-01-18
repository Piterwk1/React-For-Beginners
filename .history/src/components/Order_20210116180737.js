import React from 'react';
import { formatPrice } from '../helpers';

// class Order extends Component {
//   render() {
//     return <div className="order">Order!!</div>;
//   }
// }

// export default Order;

const Order = (props) => {
  const renderOrder = (key) => {
    const fish = props.fishes[key];
    const count = props.order[key];
    const isAvailable = fish.status === 'available';
    // const isAvailable = fish && fish.status === 'available';
    // z firebase

    // z firebase
    // if (!fish) return null;

    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry {fish ? fish.name : 'fish'} is no longer availible
        </li>
      );
    }
    return (
      <li key={key}>
        {count} lbs {fish.name}
        {formatPrice(count * fish.price)}
        <button onClick={() => props.removeFromOrder(key)}>X</button>
      </li>
    );
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
      <ul className="order">{orderId.map((key) => renderOrder(key))}</ul>
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

export default Order;
