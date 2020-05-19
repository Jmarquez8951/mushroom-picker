import React from 'react';
import './App.scss';

import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';
import Basket from '../components/Basket/Basket';
import DeadlyPoison from '../components/DeadlyPoison/DeadlyPoison';
import Win from '../components/Win/Win';

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

   checkBasket = () => {
     const winDiv = document.getElementsByClassName('win')[0];
     const basket = mushroomData.getBasket();
     const goodMushrooms = [...new Set(basket)];
     if (goodMushrooms.length === 15) {
       winDiv.classList.remove('hide');
       const stopButton = document.getElementsByClassName('btn')[0];
       stopButton.classList.add('disabled');
     }
   };

  randomMushroomEvent = (e) => {
    e.preventDefault();
    const stopButton = document.getElementsByClassName('btn')[0];
    if (stopButton.classList.contains('disabled') === true) {
      return;
    }
    mushroomData.pickAMushroom();
    const basket = mushroomData.getBasket();
    this.setState({ basket });
    this.checkBasket();
  }

  render() {
    return (
      <div className="App">
        <h1 className="text-white">Mushroom Picker</h1>
        <button className="btn btn-dark mb-3" onClick={this.randomMushroomEvent}>Pick a Mushroom</button>
        <DeadlyPoison/>
        <Win/>
        <Basket basketMushrooms={this.state.basket}/>
        <Forest mushrooms={this.state.mushrooms}/>
      </div>
    );
  }
}

export default App;
