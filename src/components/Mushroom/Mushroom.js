import React from 'react';
// import PropTypes from 'prop-types';
import mushroomShape from '../../helpers/propz/mushroomShape';

import './Mushroom.scss';

class Mushroom extends React.Component {
  static propTypes = {
    mushroom: mushroomShape.mushroomShape,
  }

  render() {
    const { mushroom } = this.props;
    return (
      <div className="Mushroom d-flex col-3 ml-0 mr-0 mt-2 mb-4">
        <div className="card bg-dark">
          <img className="align-self-center rounded ml-2 mr-2 mt-1" src={mushroom.imgUrl} alt=""/>
          <div className="card-body">
            <h5 className="card-title text-white">{mushroom.name}</h5>
            <p className="card-text text-white">{mushroom.description}</p>
            {
              mushroom.isMagic ? (
                <p className="text-white">Has magic properties.</p>
              ) : (
                ''
              )
            }
            {
              mushroom.isDeadly ? (
                <p className="text-white">Can cause death.</p>
              ) : (
                ''
              )
            }
            {
              mushroom.isPoisonous ? (
                <p className="text-white">Is very poisonous.</p>
              ) : (
                ''
              )
            }
            {mushroom.isDeadly === false && mushroom.isMagic === false && mushroom.isPoisonous === false && (
              <p className="text-white">Regular old mushroom</p>
            )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Mushroom;
