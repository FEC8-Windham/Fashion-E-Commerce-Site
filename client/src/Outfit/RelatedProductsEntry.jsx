import React from 'react';
import { CardContainer, Card, Info, Pic, Category, Title, Price, Rating } from './styles/CardEntry.style.js';

const RelatedProductsEntry = (props) => {
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
        {/* Image */} <Pic src='https://m.media-amazon.com/images/I/61xVh4j40iL._AC_UX569_.jpg' alt='clothingImage' />
        <Info>
          {/* Category */} <Category>Category</Category>
          <br></br>
          {/* Title */} <Title>Plain White Tee</Title>
          <br></br>
          {/* Price */} <Price>$9.99</Price>
          <br></br>
          {/* Rating */} <Rating>⭑⭑⭑⭑⭑</Rating>
        </Info>
      </Card>
      <br></br>
    </CardContainer>
  );
};

export default RelatedProductsEntry;