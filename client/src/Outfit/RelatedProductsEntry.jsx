import React, { useState, useEffect } from 'react';
import { CardContainer, Card, Info, ImageContainer, Pic, StarButton, Category, Title, Price, Rating } from './styles/CardEntry.style.js';
import StarRating from '../Helper-Components/StarRating.jsx';
import { getRelatedData } from '../Controllers/outfitData.js';
import { calculateAverageRating } from '../HelperFunctions.js';

const RelatedProductsEntry = (props) => {
  var relatedId = props.id;

  var [metaData, setMetaData] = useState(null);
  var [relatedData, setRelatedData] = useState(null);
  var [numberStyles, setNumberStyles] = useState(null);
  var [name, setName] = useState(null);
  var [category, setCategory] = useState(null);
  var [price, setPrice] = useState(null);
  var [salePrice, setSalePrice] = useState(null);
  var [url, setUrl] = useState(null);
  var [rating, setRating] = useState(null);
  var [loaded, setLoaded] = useState(false);

  useEffect(async () => {
    setMetaData(await getRelatedData(relatedId));
  }, []);

  useEffect(() => {
    if (metaData) {
      setRelatedData(metaData.productInfo);
      setNumberStyles(metaData.productStyles.length);
      setName(metaData.productInfo.name);
      setCategory(metaData.productInfo.category);
      setPrice(metaData.productInfo.default_price);
      setSalePrice(metaData.productStyles[0].sale_price);
      setUrl(metaData.productStyles[0].photos[0].url);
      setRating(calculateAverageRating(metaData.reviewMeta.ratings));
    }
  }, [metaData]);

  useEffect(() => {
    if (!url) {
      setUrl('https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png');
    }
    setLoaded(true);
  }, [url]);

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
        <Card onClick={() => { props.clickHandler(relatedData, numberStyles, rating); }}>
          <ImageContainer>
            <StarButton>✩</StarButton>
            <Pic src={url} alt='no image' />
          </ImageContainer>
          <Info>
            <Category>{category}</Category>
            <br></br>
            <Title>{name}</Title>
            <br></br>
            {salePrice ?
              <div>
                <Price decoration='line-through'>${price}</Price>
                <Price color='red'> ${salePrice}</Price> </div> :
              <Price>${price}</Price>}
            <br></br>
            <Rating>
              {rating ? <StarRating rating={rating} /> : 'No rating yet'}
            </Rating>
          </Info>
        </Card>
        : null}
    </CardContainer>
  );
};

export default RelatedProductsEntry;