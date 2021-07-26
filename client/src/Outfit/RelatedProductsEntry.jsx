import React, { useState, useEffect } from 'react';
import { CardContainer, Card, Info, ImageContainer, Pic, StarButton, Category, Title, Price, Rating } from './styles/CardEntry.style.js';
import StarRating from '../Helper-Components/StarRating.jsx';
import { getRelatedData } from '../Controllers/outfitData.js';
import { calculateAverageRating } from '../HelperFunctions.js';

const RelatedProductsEntry = (props) => {
  var relatedId = props.id;

  var [metaData, setMetaData] = useState(null);
  var [name, setName] = useState('');
  var [category, setCategory] = useState('');
  var [price, setPrice] = useState('');
  var [url, setUrl] = useState('');
  var [rating, setRating] = useState('');
  var [loaded, setLoaded] = useState(false);

  useEffect(async () => {
    setMetaData(await getRelatedData(relatedId)); // refer to app.jsx
  }, []);

  useEffect(() => {
    if (metaData) {
      setName(metaData.productInfo.name);
      setCategory(metaData.productInfo.category);
      setPrice(metaData.productInfo.default_price);
      setUrl(metaData.productStyles[0].photos[0].url);
      setRating(calculateAverageRating(metaData.reviewMeta.ratings));
      setLoaded(true);
    }
  }, [metaData]);

  var isLast = false;
  var marginx = '20px';
  if (props.last) {
    isLast = true;
    marginx = '0px';
  }

  return (
    <CardContainer margin={marginx}>
      <br></br>
      {loaded ?
        <Card>
          <ImageContainer>
            <StarButton>✩</StarButton>
            <Pic src={url} alt='no image' />
          </ImageContainer>
          <Info>
            <Category>{category}</Category>
            <br></br>
            <Title>{name}</Title>
            <br></br>
            <Price>${price}</Price>
            <br></br>
            <StarRating rating={rating} />
          </Info>
        </Card>
        : null}
    </CardContainer>
  );
};

export default RelatedProductsEntry;