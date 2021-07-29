import React from 'react';
import StarRating from '../../Helper-Components/StarRating.jsx';
import Styles from './Styles.jsx';
import ShareButton from './ShareButton.jsx';
import { Category, Name, OriginalPrice, SalePrice, Price, Style, Size, Description, Slogan, InfoContainer, StarContainer, StyleName, TextStyle } from '../Styled-Components/Styled-ProductInfo.js';

var ProductInfo = ({rating, category, name, styles, size, description, slogan, originalPrice, salePrice, currStyleIndex, setCurrStyleIndex}) => {

  return (
    <InfoContainer>
      <StarContainer>
        <StarRating rating={rating}/>
      </StarContainer>
      <Category>{category}</Category>
      <Name>{name}</Name>

      {salePrice ?
        <Price>
          <OriginalPrice sale>
          ${originalPrice}
          </OriginalPrice>
          <SalePrice>
            ${salePrice}
          </SalePrice>
        </Price> :
        <Price>
          <OriginalPrice>
          ${originalPrice}
          </OriginalPrice>
        </Price>
      }
      <TextStyle>STYLE > </TextStyle>
      <StyleName>{styles[currStyleIndex].name}</StyleName>
      <Styles styles = {styles} setCurrStyleIndex ={setCurrStyleIndex} currStyleIndex= {currStyleIndex} />

      <ShareButton/>
    </InfoContainer>
  );
};

export default ProductInfo;
