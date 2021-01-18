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

const Inventory = (props) => {
  return <Login />;
};

Inventory.propTypes = {
  fishes: PropTypes.object,
  updateFish: PropTypes.func,
  deleteFish: PropTypes.func,
  loadSampleFishes: PropTypes.func,
};

export default Inventory;
