import React from 'react';
import './App.scss';

import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';

class App extends React.Component {
  state = {
    mushrooms: [],
    basket: [],
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    const basket = mushroomData.getBasket();
    this.setState({ mushrooms, basket });
  }

  render() {
    return (
      <div className="App">
        <h1 className="text-white">Mushroom Picker</h1>
        <Forest mushrooms={this.state.mushrooms}/>
      </div>
    );
  }
}

export default App;
