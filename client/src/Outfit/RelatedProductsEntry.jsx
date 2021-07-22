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
        <Pic src='https://i.guim.co.uk/img/media/1d3e368da379013c28a932d7e13de98cfbbe58c6/73_508_5206_3123/master/5206.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=afce95617427702369800ae1a9d4f2b0' alt='clothingImage' />
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