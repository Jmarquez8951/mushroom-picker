import React from 'react';
import PropTypes from 'prop-types';
import mushroomShape from '../../helpers/propz/mushroomShape';
import Mushroom from '../Mushroom/Mushroom';

import './Basket.scss';

class Basket extends React.Component {
  static propTypes = {
    basketMushrooms: PropTypes.arrayOf(mushroomShape.mushroomShape).isRequired,
  }

  render() {
    const { basketMushrooms } = this.props;
    const makeBasketMushrooms = basketMushrooms.map((oneMushroom) => (
      <Mushroom key={`basket-${oneMushroom.id}`} mushroom={oneMushroom}/>
    ));

    return (
     <div className="Basket d-flex flex-column justify-content-center">
       <h2>My Basket</h2>
       <div className="myBasket d-flex flex-wrap justify-content-center">
        {makeBasketMushrooms}
       </div>
     </div>
    );
  }
}

export default Basket;
