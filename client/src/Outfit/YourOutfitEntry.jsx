import React from 'react';
import { CardContainer, Card, Info, ImageContainer, Pic, Category, Title, Price, Rating } from './styles/CardEntry.style.js';
import StarRating from '../Helper-Components/StarRating.jsx';


const YourOutfitEntry = (props) => {
  return (
    <CardContainer>
      {/* CARD
        Pic
        Category
        Title
        Price
        Rating
        Action
      */}
      <br></br>
      <Card>
        <ImageContainer>
          <Pic src='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/464e8d65-3a82-472a-aa2c-de53b2dfe7f2/wearallday-shoe-XpS7nX.png' alt='shoeImage' />
        </ImageContainer>
        <Info>
          <Category>Footwear</Category>
          <br></br>
          <Title>Nike Sneaker</Title>
          <br></br>
          <Price>$999.99</Price>
          <br></br>
          <StarRating rating={3.5}/>
        </Info>
      </Card>
      <br></br>
    </CardContainer>
  );
};

export default YourOutfitEntry;