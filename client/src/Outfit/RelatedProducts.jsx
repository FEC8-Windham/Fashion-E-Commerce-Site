import React, { useState, useEffect } from 'react';
import RelatedProductsEntry from './RelatedProductsEntry.jsx';
import { Container, RowContainer, Fadeout, NextButton, PreviousButton, SectionTitle } from './styles/Cards.style.js';
import { stylesJSON } from '../../../APIExamples/styles.js';
import axios from 'axios';

const RelatedProducts = (props) => {
  var [data, setData] = useState('');
  var [isLoading, setLoading] = useState(true);
  var [currentItemId, setCurrentItemId] = useState(19809);
  var [relatedIds, setRelatedIds] = useState([]);
  var [allRelatedProducts, changeRelatedProducts] = useState([]);

  // Use: 19809

  useEffect(() => {
    getRelatedIds();
  }, []);

  var getRelatedIds = () => {
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
        console.log('Related IDs:', relatedIds);
      })
      .catch(function (error) {
        console.log(error);
      });
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
        console.log(response.data);
        var temp = allRelatedProducts;
        temp.push(response.data);
        console.log('Temp', temp);
        changeRelatedProducts(temp);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // buttonRight = document.getElementById('slideRight');
  // buttonLeft = document.getElementyById('slideLeft');

  // buttonRight.onclick = () => {
  //   document.getElementById('container').scrollLeft += 20;
  // };
  // buttonLeft.onclick = () => {
  //   document.getElementById('container').scrollLeft -= 20;
  // };

  var clickHandlerLeft = () => {
    // console.log('Right button click!', document.querySelector('#relatedContainer').scrollLeft);
    document.querySelector('#relatedContainer').scrollLeft += 202;
  };

  var clickHandlerRight = () => {
    // console.log('Left button click!', document.querySelector('#relatedContainer').scrollLeft);
    document.querySelector('#relatedContainer').scrollLeft -= 202;
  };

  return (
    <Container>
      <SectionTitle>RELATED PRODUCTS</SectionTitle>
      <PreviousButton onClick={clickHandlerRight}>{'<'}</PreviousButton>
      <RowContainer id="relatedContainer">
        <RelatedProductsEntry />
        <RelatedProductsEntry />
        <RelatedProductsEntry />
        <RelatedProductsEntry />
        <RelatedProductsEntry />
        <RelatedProductsEntry />
        <RelatedProductsEntry last={true}></RelatedProductsEntry>
      </RowContainer>
      <NextButton onClick={clickHandlerLeft}>{'>'}</NextButton>
    </Container>
  );
};

export default RelatedProducts;

// class RelatedProducts extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: '',
//       currentItemId: 19809,
//       relatedIds: [],
//       allRelatedProducts: []
//     };
//   }

//   componentDidMount() {
//     console.log('Hello');
//     this.getRelatedIds();
//   }

//   getRelatedIds() {
//     var config = {
//       method: 'get',
//       url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${this.state.currentItemId}/related`,
//       headers: {
//         'Authorization': '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'
//       },
//       data: this.state.data
//     };

//     axios(config)
//       .then(response => {
//         this.setState ({relatedIds: response.data}, () => {
//           this.getRelatedItems(this.state.relatedIds);
//         });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   getRelatedItems(ids) {
//     console.log('Related IDs:', ids);
//     ids.forEach(id => {
//       var config = {
//         method: 'get',
//         url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/styles`,
//         headers: {
//           'Authorization': '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'
//         },
//         data: this.state.data
//       };

//       axios(config)
//         .then(response => {
//           var temp = this.state.allRelatedProducts;
//           temp.push(response.data);
//           this.setState({allRelatedProducts: temp});
//           if (this.state.allRelatedProducts.length === 4) {
//             console.log('4');
//             this.state.allRelatedProducts.map(product => <RelatedProductsEntry data={product}></RelatedProductsEntry>);
//           }
//         })
//         .catch(error => {
//           console.log(error);
//         });
//     });
//   }

//   render() {
//     return (
//       <RowContainer>
//         <SectionTitle>RELATED PRODUCTS</SectionTitle>
//         {console.log('All related products:', this.state.allRelatedProducts)}
//         {this.state.allRelatedProducts}
//         <NextButton>{'>'}</NextButton>
//       </RowContainer>
//     );
//   }
// }