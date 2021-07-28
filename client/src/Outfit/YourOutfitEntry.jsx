import React from 'react';
import { CardContainer, Card, Info, ImageContainer, Pic, Add, XButton, Category, Title, Price, Rating } from './styles/CardEntry.style.js';
import StarRating from '../Helper-Components/StarRating.jsx';
import { calculateAverageRating } from '../HelperFunctions.js';

const YourOutfitEntry = (props) => {
  var isLast = false;
  var marginx = '20px';
  if (props.last) {
    isLast = true;
    marginx = '0px';
  }

  if (typeof props.item === 'object') {
    var url = props.item.url;
    var category = props.item.category;
    var name = props.item.name;
    var price = props.item.default_price;
    var salePrice = props.item.sale;
    var rating = props.item.rating;

    return (
      <CardContainer margin={marginx}>
        <br></br>
        <Card>
          <ImageContainer>
            <XButton>ⓧ</XButton>
            <Pic src={url} />
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
            <StarRating rating={rating} />
          </Info>
        </Card>
        <br></br>
      </CardContainer>
    );
  } else if (props.first) {
    return (
      <CardContainer margin={marginx}>
        <br></br>
        <Card onClick={props.click}>
          <ImageContainer>
            <Add src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Feather-core-plus-circle.svg/1024px-Feather-core-plus-circle.svg.png'></Add>
          </ImageContainer>
          <Info>
            <h3>Add Outfit</h3>
          </Info>
        </Card>
        <br></br>
      </CardContainer>
    );
  } else {
    return (
      <CardContainer margin={marginx}>
        <br></br>
        <Card>
          <ImageContainer>
            <XButton>ⓧ</XButton>
            <Pic src='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/464e8d65-3a82-472a-aa2c-de53b2dfe7f2/wearallday-shoe-XpS7nX.png' alt='shoeImage' />
          </ImageContainer>
          <Info>
            <Category>Footwear</Category>
            <br></br>
            <Title>{props.item}</Title>
            <br></br>
            <Price>$999.99</Price>
            <br></br>
            <StarRating rating={3.5} />
          </Info>
        </Card>
        <br></br>
      </CardContainer>
    );
  }
};

export default YourOutfitEntry;