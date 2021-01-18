import React, { Component } from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      <>
        <form className="store-selector">
          <p>Please Enter A Store</p>
          <input type="text" placeholder="Store name" />
          <button type="submit">Please Enter A Store</button>
        </form>
      </>
    );
  }
}

export default StorePicker;
