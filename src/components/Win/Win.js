import React from 'react';
import './Win.scss';

class Win extends React.Component {
  render() {
    return (
      <div className="Win">
        <div className="alert alert-success win hide" role="alert">
          <h4 className="alert-heading">Congratulations!</h4>
          <p>You got one of all the safe mushrooms.</p>
        </div>
      </div>
    );
  }
}

export default Win;
