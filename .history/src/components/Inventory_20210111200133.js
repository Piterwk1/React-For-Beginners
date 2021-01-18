import React, { Component } from 'react';
import AddFishForm from './AddFishForm';

// class Inventory extends Component {
//   render() {
//     return <div className="inventory"><h2>Inventory!!!</h2></div>;
//   }
// }

// export default Inventory;

const Inventory = (props) => (
  <div className="inventory">
    <h2>Inventory!!!</h2>
    <AddFishForm addFish={props.addFish} />
    <button onClick={props.loadSampleFishes}>load Sample Fishes</button>
  </div>
);

export default Inventory;
