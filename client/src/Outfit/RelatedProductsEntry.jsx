import React from 'react';
import { CardContainer, Card, Info, ImageContainer, Pic, Category, Title, Price, Rating } from './styles/CardEntry.style.js';
import StarRating from '../Helper-Components/StarRating.jsx';

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
        <ImageContainer>
          <Pic src='https://i.guim.co.uk/img/media/207a33eb6f6719f68abb67132c779cd63ac35917/675_1268_2360_4270/master/2360.jpg?width=700&quality=85&auto=format&fit=max&s=7828cdb560b8831c81e103dd17d545cc' alt='clothingImage' />
        </ImageContainer>
        <Info>
          <Category>Tops</Category>
          <br></br>
          <Title>Plain White Tee</Title>
          <br></br>
          <Price>$9.99</Price>
          <br></br>
          <StarRating rating={4.75}/>
        </Info>
      </Card>
      <br></br>
    </CardContainer>
  );
};

export default RelatedProductsEntry;