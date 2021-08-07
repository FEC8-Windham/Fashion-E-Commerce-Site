import React, { useState, useEffect, useRef } from 'react';
import RelatedProductsEntry from './RelatedProductsEntry.jsx';
import { Container, RowContainer, FadeoutRight, NextButton, PreviousButton, SectionTitle } from '../Styles/Cards.style.js';

const RelatedProducts = (props) => {
  var relatedProducts = props.data;
  relatedProducts = [...new Set(relatedProducts)];

  var [leftMost, setLeftMost] = useState(true);
  var [rightMost, setRightMost] = useState(false);
  var [display, setDisplay] = useState(null);

  useEffect(() => {
    if (relatedProducts.length <= 4) {
      setDisplay('none');
      setRightMost(true);
    } else if (relatedProducts.length > 3) {
      setDisplay('linear-gradient(to right, black 85%, transparent)');
      setRightMost(false);
    } else {
      setDisplay('none');
      setRightMost(true);
    }
  }, [relatedProducts]);

  var clickHandlerRight = () => {
    document.querySelector('#relatedContainer').scrollLeft += 260;
    const end = document.querySelector('#relatedContainer').scrollWidth - document.querySelector('#relatedContainer').scrollLeft - 1294;
    if (end <= 100) {
      console.log('Reached the end!');
      setDisplay('none');
      setRightMost(true);
    }
    setLeftMost(false);
  };

  var clickHandlerLeft = () => {
    document.querySelector('#relatedContainer').scrollLeft -= 260;
    if (document.querySelector('#relatedContainer').scrollLeft <= 260) {
      setLeftMost(true);
    }

    setRightMost(false);
    setDisplay('linear-gradient(to right, black 85%, transparent)');
  };

  return (
    <Container onClick={props.click}>
      <SectionTitle >RELATED PRODUCTS</SectionTitle>
      {!leftMost ? <PreviousButton onClick={clickHandlerLeft}>&#10094;</PreviousButton> : null}
      {!rightMost ? <NextButton onClick={clickHandlerRight}>&#10095;</NextButton> : null}
      <FadeoutRight mask={display}>
        <RowContainer id="relatedContainer">
          {relatedProducts.map((item, i) => {
            if (relatedProducts[relatedProducts.length - 1] === item) {
              return <RelatedProductsEntry key={item} relatedId={item} clickHandler={props.clickHandler} changeProduct={props.changeProduct} last={true} />;
            } else {
              return <RelatedProductsEntry key={item} relatedId={item} clickHandler={props.clickHandler} changeProduct={props.changeProduct} />;
            }
          })}
        </RowContainer>
      </FadeoutRight>
    </Container>
  );
};

export default RelatedProducts;
