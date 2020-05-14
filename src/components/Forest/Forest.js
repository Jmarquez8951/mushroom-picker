import React from 'react';
import './Forest.scss';

import Mushroom from '../Mushroom/Mushroom';

class Forest extends React.Component {
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
