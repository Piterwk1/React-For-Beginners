import React from 'react';

// class Order extends Component {
//   render() {
//     return <div className="order">Order!!</div>;
//   }
// }

// export default Order;

const Order = (props) => {
  const orderId = Object.keys(props.order);

  return <div className="order-wrap">Order!!</div>;
};

export default Order;
