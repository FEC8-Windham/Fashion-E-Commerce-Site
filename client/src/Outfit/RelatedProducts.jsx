import React, { useState, useEffect } from 'react';
import RelatedProductsEntry from './RelatedProductsEntry.jsx';
import { Container, RowContainer, FadeoutRight, NextButton, PreviousButton, SectionTitle } from './styles/Cards.style.js';

const RelatedProducts = (props) => {
  var relatedProducts = props.data;

  var [leftMost, setLeftMost] = useState(true);
  var [rightMost, setRightMost] = useState(false);
  var [display, setDisplay] = useState(null);

  useEffect (() => {
    if (relatedProducts.length <= 4) {
      setDisplay('none');
      setRightMost(true);
    }
  }, []);

  var clickHandlerRight = () => {
    document.querySelector('#relatedContainer').scrollLeft += 260;
    const end = document.querySelector('#relatedContainer').scrollWidth - document.querySelector('#relatedContainer').scrollLeft - 1294;
    if (end <= 0) {
      setDisplay('none');
      setRightMost(true);
    }
    setLeftMost(false);
  };

  var clickHandlerLeft = () => {
    document.querySelector('#relatedContainer').scrollLeft -= 260;
    if (document.querySelector('#relatedContainer').scrollLeft <= 260) {
      setLeftMost(true);
      setRightMost(false);
    }
    setDisplay('linear-gradient(to right, black 70%, transparent)');
  };

  return (
    <Container id='relatedProductsContainer'>
      <SectionTitle>RELATED PRODUCTS</SectionTitle>
      {!leftMost ? <PreviousButton onClick={clickHandlerLeft}>{'<'}</PreviousButton> : null}
      {!rightMost ? <NextButton onClick={clickHandlerRight}>{'>'}</NextButton> : null}
      <FadeoutRight id='fadeout' mask={display}>
        <RowContainer id="relatedContainer">
          {relatedProducts.map((item, i) => {
            if (relatedProducts[relatedProducts.length - 1] === item) {
              return <RelatedProductsEntry key={item} relatedId={item} id={'relatedProductsEntry' + i} clickHandler={props.clickHandler} last={true} />;
            } else {
              return <RelatedProductsEntry key={item} relatedId={item} id={'relatedProductsEntry' + i} clickHandler={props.clickHandler} />;
            }
          })}
        </RowContainer>
      </FadeoutRight>
    </Container>
  );
};

export default RelatedProducts;
