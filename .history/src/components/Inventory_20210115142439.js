import React from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

// class Inventory extends Component {
//   render() {
//     return <div className="inventory"><h2>Inventory!!!</h2></div>;
//   }
// }

// export default Inventory;

const Inventory = (props) => (
  <div className="inventory">
    <h2>Inventory!!!</h2>
    {Object.keys(props.fishes).map((key) => (
      <EditFishForm key={key} fish={props.fishes[key]} />
    ))}
    <AddFishForm addFish={props.addFish} />
    <button onClick={props.loadSampleFishes}>load Sample Fishes</button>
  </div>
);

export default Inventory;
