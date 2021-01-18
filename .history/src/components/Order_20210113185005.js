import React from 'react';
import { formatPrice } from '../helpers';

// class Order extends Component {
//   render() {
//     return <div className="order">Order!!</div>;
//   }
// }

// export default Order;

const Order = (props) => {
  const renderOrder = (props, key) => {
    const fish = props.fishes[key];
    const count = props.order[key];

    return (
      <li>
        {count} lbs {fish.name}
        {formatPrice(count * fish.price)}
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
      <ul>
        {orderId.map(renderOrder())}

        {/* {orderId.map((key) => (
          <li>{key}</li>
        ))} */}
      </ul>
      <div className="total">
        Total:
        <strong>{formatPrice(total)}</strong>
      </div>
    </div>
  );
};

export default Order;

// const renderOrder = (key) => {
//     const fish = props.fishes[key];
//     const count = props.order[key];

//     return <li>{key}</li>;
//     return (
//       <li>
//         {count} lbs {fish.name}
//         {formatPrice(count * fish.price)}
//       </li>
//     );
//   };
