import React from 'react';
import './App.scss';

import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';
import Basket from '../components/Basket/Basket';

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

  randomMushroomEvent = () => {
    mushroomData.pickAMushroom();
    const basket = mushroomData.getBasket();
    this.setState({ basket });
  }

  render() {
    return (
      <div className="App">
        <h1 className="text-white">Mushroom Picker</h1>
        <button className="btn btn-dark" onClick={this.randomMushroomEvent}>Pick a Mushroom</button>
        <Forest mushrooms={this.state.mushrooms}/>
        <Basket basketMushrooms={this.state.basket}/>
      </div>
    );
  }
}

export default App;
