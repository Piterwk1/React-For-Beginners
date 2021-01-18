import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  goToStore = () => {
    console.log('going to store');
  };

  render() {
    return (
      <>
        <form className="store-selector" onSubmit={this.goToStore}>
          <p>PLEASE ENTER A STORE</p>
          <input
            type="text"
            placeholder="Store name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store</button>
        </form>
      </>
    );
  }
}

export default StorePicker;
