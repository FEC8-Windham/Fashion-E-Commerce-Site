import React, { useState, useEffect } from 'react';
import RelatedProductsEntry from './RelatedProductsEntry.jsx';
import { Container, RowContainer, FadeoutRight, NextButton, PreviousButton, SectionTitle } from './styles/Cards.style.js';

const RelatedProducts = (props) => {
  var relatedProducts = props.data;

  var [leftMost, setLeftMost] = useState(true);
  var [rightMost, setRightMost] = useState(false);

  var clickHandlerRight = () => {
    document.querySelector('#relatedContainer').scrollLeft += 202;
    if (document.querySelector('#relatedContainer').scrollLeft >= relatedProducts.length * 30) {
      setRightMost(true);
    }
    setLeftMost(false);
  };

  var clickHandlerLeft = () => {
    document.querySelector('#relatedContainer').scrollLeft -= 202;
    if (document.querySelector('#relatedContainer').scrollLeft < 203) {
      setLeftMost(true);
    }
    setRightMost(false);
  };

  return (
    <Container>
      <SectionTitle>RELATED PRODUCTS</SectionTitle>
      {!leftMost ? <PreviousButton onClick={clickHandlerLeft}>{'<'}</PreviousButton> : null}
      <FadeoutRight>
        <RowContainer id="relatedContainer">
          {relatedProducts.map(item => {
            if (relatedProducts[relatedProducts.length - 1] === item) {
              return <RelatedProductsEntry key={item} id={item} clickHandler={props.clickHandler} last={true} />;
            } else {
              return <RelatedProductsEntry key={item} id={item} clickHandler={props.clickHandler} />;
            }
          })}
        </RowContainer>
      </FadeoutRight>
      {!rightMost ? <NextButton onClick={clickHandlerRight}>{'>'}</NextButton> : null}
    </Container>
  );
};

export default RelatedProducts;
