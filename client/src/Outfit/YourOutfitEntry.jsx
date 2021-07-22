import React from 'react';
import { CardContainer, Card, Info, Pic, Category, Title, Price, Rating } from './styles/CardEntry.style.js';

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
        {/* Image */} <Pic src='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/464e8d65-3a82-472a-aa2c-de53b2dfe7f2/wearallday-shoe-XpS7nX.png' alt='shoeImage' />
        <Info>
          {/* Category */} <Category>Category</Category>
          <br></br>
          {/* Title */} <Title>Shoe</Title>
          <br></br>
          {/* Price */} <Price>$999.99</Price>
          <br></br>
          {/* Rating */} <Rating>⭑✩✩✩✩</Rating>
        </Info>
      </Card>
      <br></br>
    </CardContainer>
  );
};

export default YourOutfitEntry;