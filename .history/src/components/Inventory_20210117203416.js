import React from 'react';
import PropTypes from 'prop-types';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import Login from './Login';

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
      <EditFishForm
        key={key}
        index={key}
        fish={props.fishes[key]}
        updateFish={props.updateFish}
        deleteFish={props.deleteFish}
      />
    ))}
    <AddFishForm addFish={props.addFish} />
    <button onClick={props.loadSampleFishes}>load Sample Fishes</button>
  </div>
);

Inventory.propTypes = {
  fishes: PropTypes.object,
  updateFish: PropTypes.func,
  deleteFish: PropTypes.func,
  loadSampleFishes: PropTypes.func,
};

export default Inventory;
