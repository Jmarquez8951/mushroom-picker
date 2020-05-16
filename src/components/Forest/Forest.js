import React from 'react';
import PropTypes from 'prop-types';
import mushroomShape from '../../helpers/propz/mushroomShape';
import './Forest.scss';

import Mushroom from '../Mushroom/Mushroom';

class Forest extends React.Component {
  static propTypes = {
    mushrooms: PropTypes.arrayOf(mushroomShape.mushroomShape).isRequired,
  }

  render() {
    const makeMushrooms = this.props.mushrooms.map((mushroom) => (
      <Mushroom key={mushroom.id} mushroom={mushroom}/>
    ));
    return (
      <div className="Forest d-flex flex-wrap justify-content-center">
        {makeMushrooms}
      </div>
    );
  }
}

export default Forest;
