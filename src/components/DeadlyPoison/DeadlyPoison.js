import React from 'react';
import './DeadlyPoison.scss';

class DeadlyPoison extends React.Component {
  render() {
    return (
      <div className="DeadlyPoison">
        <div className="alert alert-danger hide" role="alert">
          <h4 className="alert-heading">Oh No!</h4>
          <p className="mb-0">You picked a very dangerous mushroom.</p>
        </div>
      </div>
    );
  }
}

export default DeadlyPoison;
