import React from 'react';
import RelatedProductsEntry from './RelatedProductsEntry.jsx';
import { RowContainer, Fadeout, NextButton } from './styles/Cards.style.js';

const RelatedProducts = (props) => {
  return (
    <RowContainer>
      <RelatedProductsEntry />
      <RelatedProductsEntry />
      <RelatedProductsEntry />
      <Fadeout>
        <RelatedProductsEntry />
      </Fadeout>
      <NextButton>{'>'}</NextButton>
    </RowContainer>
  );
};

export default RelatedProducts;