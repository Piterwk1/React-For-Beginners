import React from 'react';
import PropTypes from 'prop-types';
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
  fish: PropTypes.shape({
    name: PropTypes.string,
    status: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
  }),
  index: PropTypes.string,
  updateFish: PropTypes.func,
};

export default Inventory;
