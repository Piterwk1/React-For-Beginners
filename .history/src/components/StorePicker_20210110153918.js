import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (e) => {
    // console.log(this.myInput);
    e.preventDefault();
    const storyName = this.myInput.current;
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
