import React from 'react';
import StarRating from '../../Helper-Components/StarRating.jsx';
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



// <Container height='100%' width='100%' bgColor={'blue'}>
// <Container height='15%' width='95%' padding='5px' bgColor={'green'}>
//   <Container height='100%' width='50%' float='left' bgColor={'purple'}>
//     <span>Stars</span>
//   </Container>
//   <Container height='100%' width='50%' float='right' bgColor={'yellow'}>
//     <span>User</span>
//   </Container>
// </Container>
// <Container height='15%' width='100%' bgColor={'pink'}>
//   <span>Title</span>
// </Container>
// <Container height='45%' width='100%' bgColor={'orange'}>
//   <span>Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body</span>
// </Container>
// <Container height='10%' width='100%' bgColor={'plum'}>
//   <span>Helpful widget</span>
// </Container>
// </Container>