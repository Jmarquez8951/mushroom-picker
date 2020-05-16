import React from 'react';
import PropTypes from 'prop-types';
import mushroomShape from '../../helpers/propz/mushroomShape';
import Mushroom from '../Mushroom/Mushroom';

class Basket extends React.Component {
  static propTypes = {
    basketMushrooms: PropTypes.arrayOf(mushroomShape.mushroomShape).isRequired,
  }

  render() {
    const makeBasketMushrooms = this.props.basketMushrooms.map((oneMushroom) => (
      <Mushroom key={`basket-${oneMushroom.id}`} mushroom={oneMushroom}/>
    ));

    return (
     <div className="Basket d-flex flex-wrap justify-content-center">
        {makeBasketMushrooms}
     </div>
    );
  }
}

export default Basket;
