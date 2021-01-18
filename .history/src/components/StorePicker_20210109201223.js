import React, { Component } from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      <>
        <form className="store-selector">
          <p>PLEASE ENTER A STORE</p>
          <input type="text" placeholder="Store name" />
          <button type="submit">Visit Store</button>
        </form>
      </>
    );
  }
}

export default StorePicker;
