import React from 'react';

// class Order extends Component {
//   render() {
//     return <div className="order">Order!!</div>;
//   }
// }

// export default Order;

const Order = (props) => {
  const orderId = Object.keys(props.order);
  const total = orderId.reduce((prevTotal, key) => {
    const fish = props.fishes[key];
    const count = props.Order[key];
    const isAvailable = fish && fish.status === 'available';
  });

  return (
    <div className="order-wrap">
      <h2>Order</h2>
      {orderId}
    </div>
  );
};

export default Order;
