import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import { Container } from './styles/ReviewStyles.js';


class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container height='200px' width='500px' bgColor={'red'}>
        Review Component!
        <ReviewTile/>
      </Container>
    );
  }
}

export default ReviewIndex;