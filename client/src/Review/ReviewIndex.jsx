import React from 'react';
import ReviewTile from './ReviewTile.jsx';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ReviewTile/>
        <ReviewTile/>

      </div>
    );
  }
}

export default ReviewIndex;