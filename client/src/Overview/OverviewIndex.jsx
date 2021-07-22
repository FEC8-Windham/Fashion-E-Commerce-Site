import React from 'react';
import StarRating from '../Helper-Components/StarRating.jsx';

class OverviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <StarRating rating ={2.4}/>
      </div>
    )
  }
}

export default OverviewIndex;