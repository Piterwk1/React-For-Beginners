import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (e) => {
    e.preventDefault();
    const storyName = this.myInput.value.value;
    console.log(storyName);
    // this.props.history.push(`/store/${storyName}`);
  };

  render() {
    return (
      <>
        <form className="store-selector" onSubmit={this.goToStore}>
          <p>PLEASE ENTER A STORE</p>
          <input
            type="text"
            ref={this.myInput}
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
