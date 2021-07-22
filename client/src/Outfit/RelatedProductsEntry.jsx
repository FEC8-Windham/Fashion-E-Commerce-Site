import React from 'react';
import { CardContainer, Card, Info, Pic, Category, Title, Price, Rating } from './styles/CardEntry.style.js';

const RelatedProductsEntry = (props) => {
  var style = props.data;
  console.log('First style:', style);
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
        <Pic src={img} alt='clothingImage' />
        <Info>
          <Category>Tops</Category>
          <br></br>
          <Title>Plain White Tee</Title>
          <br></br>
          <Price>$9.99</Price>
          <br></br>
          <Rating>⭑⭑⭑⭑⭑</Rating>
        </Info>
      </Card>
      <br></br>
    </CardContainer>
  );

};

export default RelatedProductsEntry;