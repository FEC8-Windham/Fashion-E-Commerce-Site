import React, { useState, useEffect, useRef } from 'react';
import RelatedProductsEntry from './RelatedProductsEntry.jsx';
import { Container, RowContainer, FadeoutRight, NextButton, PreviousButton, SectionTitle } from '../Styles/Cards.style.js';

const RelatedProducts = (props) => {
  var [relatedProducts, setRelatedProducts] = useState([...new Set(props.data)]);
  var [leftMost, setLeftMost] = useState(true);
  var [rightMost, setRightMost] = useState(false);
  var [display, setDisplay] = useState(null);
  var [changed, setChanged] = useState(false);

  useEffect(() => {
    setRelatedProducts([...new Set(props.data)]);
  }, [changed]);

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
    if (document.querySelector('#relatedContainer').scrollLeft <= 270) {
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
              return <RelatedProductsEntry key={item} relatedId={item} clickHandler={props.clickHandler} changeProduct={props.changeProduct} last={true} changed={changed} setChanged={setChanged}/>;
            } else {
              return <RelatedProductsEntry key={item} relatedId={item} clickHandler={props.clickHandler} changeProduct={props.changeProduct} changed={changed} setChanged={setChanged}/>;
            }
          })}
        </RowContainer>
      </FadeoutRight>
    </Container>
  );
};

export default RelatedProducts;
