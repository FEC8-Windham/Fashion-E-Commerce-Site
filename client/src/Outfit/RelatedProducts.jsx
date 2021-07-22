import React, { useState, useEffect } from 'react';
import RelatedProductsEntry from './RelatedProductsEntry.jsx';
import { RowContainer, Fadeout, NextButton, SectionTitle } from './styles/Cards.style.js';
import { stylesJSON } from '../../../APIExamples/styles.js';
import axios from 'axios';

const RelatedProducts = (props) => {
  var [data, setData] = useState('');
  var [isLoading, setLoading] = useState(true);
  var [currentItemId, setCurrentItemId] = useState(0);
  var [relatedIds, setRelatedIds] = useState([]);
  var [allRelatedProducts, changeRelatedProducts] = useState([]);
  var [fourOnly, changeData] = useState([]);

  useEffect(() => {
    setCurrentItemId(19809);
    getRelatedIds((relatedIds) => {
      for (var i = 0; i < relatedIds.length; i++) {
        getRelatedItems(relatedIds[i]);
      }

    });
  }, [currentItemId]);

  var getRelatedIds = (callback) => {
    if (currentItemId !== 0) {
      var config = {
        method: 'get',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${currentItemId}/related`,
        headers: {
          'Authorization': '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'
        },
        data: data
      };

      axios(config)
        .then(function (response) {
          setRelatedIds(response.data);
          callback(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  var getRelatedItems = (id) => {
    console.log('Related IDs:', id);
    var config = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/styles`,
      headers: {
        'Authorization': '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'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        var temp = allRelatedProducts;
        temp.push(response.data);
        changeRelatedProducts(temp);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <RowContainer>
      {console.log('hi', allRelatedProducts)}
      <SectionTitle>RELATED PRODUCTS</SectionTitle>
      {allRelatedProducts.map(entry => <RelatedProductsEntry key={entry.product_id} data={entry.results[0]} />)};
      <NextButton>{'>'}</NextButton>
    </RowContainer>
  );

};

export default RelatedProducts;