import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
// import base from '../base';

class App extends Component {
  state = {
    fishes: {},
    order: {},
  };

  static propTypes = {
    match: PropTypes.object,
  };

  //   componentDidMount() {
  //     const { params } = this.props.match;

  //     const localStorageRef = localStorage.getItem(params.storeId);
  //     if (localStorageRef) {
  //       this.setState({
  //         order: JSON.parse(localStorageRef),
  //       });
  //     }
  //     //     this.ref = base.syncState(`${params.storeId}/fishes`, {
  //     //       context: this,
  //     //       state: 'fishes',
  //     //     });
  //   }

  componentWillUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  //   componentWillUnmount() {
  //     base.removeBinding(this.ref);
  //   }

  addFish = (fish) => {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({
      fishes,
    });
  };

  updateFish = (key, updatedFish) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = updatedFish;
    this.setState({
      fishes,
    });
  };

  deleteFish = (key) => {
    const fishes = { ...this.state.fishes };

    // nomramlnie  ale firebase tak niezadziala
    delete fishes[key];
    // fishes[key] = null;
    this.setState({
      fishes,
    });
  };

  removeFromOrder = (key) => {
    const order = { ...this.state.order };

    // nomramlnie  ale firebase tak niezadziala
    delete order[key];
    // fishes[key] = null;
    this.setState({
      order,
    });
  };

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes,
    });
  };

  addToOrder = (key) => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({
      order,
    });
  };

  render() {
    const { fishes, order } = this.state;

    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh seafood market" />
          <ul className="fishes">
            {Object.keys(fishes).map((key) => (
              <Fish
                key={key}
                index={key}
                details={fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={fishes}
          order={order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}

export default App;
