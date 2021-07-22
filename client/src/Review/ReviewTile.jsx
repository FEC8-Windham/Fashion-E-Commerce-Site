import React from 'react';
import { Container } from './styles/ReviewStyles.js';


const ReviewTile = () => {

  return (
    <Container height='100%' width='100%' bgColor={'blue'}>
      <Container height='15%' width='95%' padding='5px' bgColor={'green'}>
        <Container height='100%' width='50%' float='left' bgColor={'purple'}>
          <span>Stars</span>
        </Container>
        <Container height='100%' width='50%' float='right' bgColor={'yellow'}>
          <span>User</span>
        </Container>
      </Container>
      <Container height='15%' width='100%' bgColor={'pink'}>
        <span>Title</span>
      </Container>
      <Container height='45%' width='100%' bgColor={'orange'}>
        <span>Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body</span>
      </Container>
      <Container height='10%' width='100%' bgColor={'plum'}>
        <span>Helpful widget</span>
      </Container>
    </Container>
  );

};

export default ReviewTile;