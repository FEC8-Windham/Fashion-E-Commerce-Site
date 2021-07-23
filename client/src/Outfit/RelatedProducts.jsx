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

  var clickHandlerLeft = () => {
    console.log('Right button click!', document.querySelector('#relatedContainer').scrollLeft);
    document.querySelector('#relatedContainer').scrollLeft += 202;
  };

  var clickHandlerRight = () => {
    console.log('Left button click!', document.querySelector('#relatedContainer').scrollLeft);
    document.querySelector('#relatedContainer').scrollLeft -= 202;
  };

  var exampleArr = [1, 2, 3, 4, 5, 6, 7];

  return (
    <Container>
      <SectionTitle>RELATED PRODUCTS</SectionTitle>
      <PreviousButton onClick={clickHandlerRight}>{'<'}</PreviousButton>
      <RowContainer id="relatedContainer">
        {exampleArr.map(item => {
          if (exampleArr[exampleArr.length - 1] === item) {
            return <RelatedProductsEntry last={true} />;
          } else {
            return <RelatedProductsEntry />;
          }
        })}
      </RowContainer>
      <Fadeout></Fadeout>
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