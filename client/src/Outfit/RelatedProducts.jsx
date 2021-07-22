import React from 'react';
import RelatedProductsEntry from './RelatedProductsEntry.jsx';
import { RowContainer, Fadeout, NextButton, SectionTitle } from './styles/Cards.style.js';

const RelatedProducts = (props) => {
  return (
    <RowContainer>
      <SectionTitle>RELATED PRODUCTS</SectionTitle>
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