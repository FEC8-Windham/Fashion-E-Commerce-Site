import React, { useState, useEffect } from 'react';
import RelatedProductsEntry from './RelatedProductsEntry.jsx';
import { Container, RowContainer, FadeoutRight, FadeoutLeft, NextButton, PreviousButton, SectionTitle } from './styles/Cards.style.js';
import { getData } from '../Controllers/getData.js';
import axios from 'axios';

const RelatedProducts = (props) => {
  var [leftMost, setLeftMost] = useState(true);
  var [rightMost, setRightMost] = useState(false);

  var exampleArr = [1, 2, 3, 4, 5, 6, 7];

  var clickHandlerLeft = () => {
    document.querySelector('#relatedContainer').scrollLeft += 202;
    console.log('Right button click!', document.querySelector('#relatedContainer').scrollLeft);
    if (document.querySelector('#relatedContainer').scrollLeft >= exampleArr.length * 50) {
      setRightMost(true);
    }
    setLeftMost(false);
  };

  var clickHandlerRight = () => {
    document.querySelector('#relatedContainer').scrollLeft -= 202;
    console.log('Left button click!', document.querySelector('#relatedContainer').scrollLeft);
    if (document.querySelector('#relatedContainer').scrollLeft < 203) {
      setLeftMost(true);
    }
    setRightMost(false);
  };

  return (
    <Container>
      <SectionTitle>RELATED PRODUCTS</SectionTitle>
      {!leftMost ? <PreviousButton onClick={clickHandlerRight}>{'<'}</PreviousButton> : null}
      <FadeoutRight>
        <RowContainer id="relatedContainer">
          {exampleArr.map(item => {
            if (exampleArr[exampleArr.length - 1] === item) {
              return <RelatedProductsEntry key={item} last={true} />;
            } else {
              return <RelatedProductsEntry key={item} />;
            }
          })}
        </RowContainer>
      </FadeoutRight>
      {!rightMost ? <NextButton onClick={clickHandlerLeft}>{'>'}</NextButton> : null}
    </Container>
  );
};

export default RelatedProducts;
