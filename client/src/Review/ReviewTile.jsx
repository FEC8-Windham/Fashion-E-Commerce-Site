import React from 'react';
import StarRating from '../Helper-Components/StarRating.jsx';
import { Container, FlexContainer } from './Styles/ReviewStyles.js';


const ReviewTile = () => {

  return (
    <FlexContainer>
      <Container >
        Stars and Users
      </Container>
      <Container >
        Title
      </Container>
      <Container >
        Title 2
      </Container>
      <Container >
        Body Body BodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBodyBody
      </Container>
      <Container >
        Helpful
      </Container>
    </FlexContainer>



  );

};

export default ReviewTile;
