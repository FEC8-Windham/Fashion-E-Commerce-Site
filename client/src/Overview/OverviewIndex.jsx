import React from 'react';
import StarRating from '../Helper-Components/StarRating.jsx';

class OverviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <StarRating rating ={3.7}/>
      </div>
    );
  }
}

export default OverviewIndex;