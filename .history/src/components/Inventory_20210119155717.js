import React from 'react';
import PropTypes from 'prop-types';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import Login from './Login';

const Inventory = (props) => {
  const authenticate = (provider) => {
    alert(provider);
  };

  return <Login authenticate={authenticate} />;
};
Inventory.propTypes = {
  fishes: PropTypes.object,
  updateFish: PropTypes.func,
  deleteFish: PropTypes.func,
  loadSampleFishes: PropTypes.func,
};

export default Inventory;
