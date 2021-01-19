import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import Login from './Login';
import base, { firebaseApp } from '../base';

const Inventory = (props) => {
  const authHandler = async (authData) => {
    const store = await base.fetch(props.storeId, { context: this });
    console.log(store);
  };

  const authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider).then(authHandler);
  };

  return <Login authenticate={authenticate} />;
  // return (
  //   <div className="inventory">
  //     <h2>Inventory!!!</h2>
  //     {Object.keys(props.fishes).map((key) => (
  //       <EditFishForm
  //         key={key}
  //         index={key}
  //         fish={props.fishes[key]}
  //         updateFish={props.updateFish}
  //         deleteFish={props.deleteFish}
  //       />
  //     ))}
  //     <AddFishForm addFish={props.addFish} />
  //     <button onClick={props.loadSampleFishes}>load Sample Fishes</button>
  //   </div>
  // );
};
Inventory.propTypes = {
  fishes: PropTypes.object,
  updateFish: PropTypes.func,
  deleteFish: PropTypes.func,
  loadSampleFishes: PropTypes.func,
};

export default Inventory;
