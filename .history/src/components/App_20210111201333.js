import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends Component {
  state = {
    fishes: {},
    order: {},
  };

  addFish = (fish) => {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({
      fishes,
    });
  };

  loadSampleFishes = () => {
    const fishes = { ...this.state.fishes };
    // fishes[`fish${Date.now()}`] = fishes;
    this.setState({
      fishes: sampleFishes,
    });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh seafood market" />
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
