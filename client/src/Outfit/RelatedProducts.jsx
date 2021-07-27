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

  var clickHandlerRight = async (e) => {
    document.querySelector('#relatedContainer').scrollLeft += 202;
    const end = document.querySelector('#relatedContainer').scrollWidth - document.querySelector('#relatedContainer').scrollLeft - 990;
    if (end <= 0) {
      console.log('End of scroll');
      setDisplay('none');
      setRightMost(true);
    }
    setLeftMost(false);
  };

  var clickHandlerLeft = () => {
    document.querySelector('#relatedContainer').scrollLeft -= 202;
    if (document.querySelector('#relatedContainer').scrollLeft < 203) {
      setLeftMost(true);
      setRightMost(false);
    }
    setDisplay('linear-gradient(to right, black 80%, transparent)');
  };

  return (
    <Container>
      <SectionTitle>RELATED PRODUCTS</SectionTitle>
      {!leftMost ? <PreviousButton onClick={clickHandlerLeft}>{'<'}</PreviousButton> : null}
      <FadeoutRight mask={display}>
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
