import React from 'react';
import ReactDOM from 'react-dom';
import {
  Modal, Data, CloseBtn,
  Top, Table, Title, ProductNames, Row, Column, MiddleColumn, ColumnStar
} from './styles/Modal.style';
import StarRating from '../Helper-Components/StarRating.jsx';

const ComparisonModal = ({ relatedData, currentData, isOpen, onClose }) => {
  /*
    [Compare]
    Category
    Default price
    Number of Styles
    Features (overlap if same feature)
    Average rating
  */

  if (!isOpen) {
    return null;
  } {
    document.addEventListener('keyup', event => {
      if (event.keyCode === 27) {
        event.preventDefault();
        try {
          document.querySelector('#closeModal').click();
        } catch (error) {
          null;
        }
      }
    });
  }
  return ReactDOM.createPortal(
    <Modal id='comparisonModal'>
      <Data>
        <Title id='comparisonTitle'>Comparing</Title>
        <Top>
          <tbody>
            <Row>
              <ProductNames id='comparisonModalCurrentDataName'>{currentData.name}</ProductNames>
              <ProductNames id='comparisonModalName' width='40%'>Name</ProductNames>
              <ProductNames id='comparisonModalRelatedDataName'>{relatedData.name}</ProductNames>
            </Row>
          </tbody>
        </Top>
        <br></br>
        <Table>
          <tbody>
            <Row>
              <Column id='comparisonModalCurrentDataCategory'>{currentData.category}</Column>
              <MiddleColumn id='comparisonModalCategory'>Category</MiddleColumn>
              <Column id='comparisonModalRelatedDataCategory'>{relatedData.category}</Column>
            </Row>
            <Row>
              {currentData.sale ? <Column id='comparisonModalCurrentDataSalePrice' color='red'>${currentData.sale}</Column> : <Column id='comparisonModalCurrentDataPrice'>${currentData.default_price}</Column>}
              <MiddleColumn id='comparisonModalPrice'>Default Price</MiddleColumn>
              <Column id='comparisonModalRelatedDataPrice'>${relatedData.default_price}</Column>
            </Row>
            <Row>
              <Column id='comparisonModalCurrentDataStyles'>{currentData.numberStyles}</Column>
              <MiddleColumn id='comparisonModalStyles'>Number of Styles</MiddleColumn>
              <Column id='comparisonModalRelatedDataStyles'>{relatedData.numberStyles}</Column>
            </Row>
          </tbody>
          <tbody>
            {relatedData.features.map((feature, i) => {
              var value = '';
              if (currentData.features[i] && currentData.features[i].feature === feature.feature) {
                value = currentData.features[i].value;
              } else {
                value = 'N/A';
              }
              return (
                <Row key={feature.value}>
                  <Column id='comparisonModalCurrentDataFeature'>{value}</Column>
                  <MiddleColumn id='comparisonModalFeature'>{feature.feature}</MiddleColumn>
                  <Column id='comparisonModalRelatedDataFeature'>{feature.value || 'N/A'}</Column>
                </Row>
              );
            })}
            {currentData.features.map((feature, i) => {
              var value2 = '';
              if (relatedData.features[i] && feature.feature !== relatedData.features[i].feature) {
                if (relatedData.features[i] && relatedData.features[i].feature === feature.feature) {
                  value2 = relatedData.features[i].value;
                } else {
                  value2 = 'N/A';
                }
                return (
                  <Row key={feature.value}>
                    <Column id='comparisonModalCurrentDataFeature'>{feature.value || 'N/A'}</Column>
                    <MiddleColumn id='comparisonModalFeature'>{feature.feature}</MiddleColumn>
                    <Column id='comparisonModalRelatedDataFeature'>{value2}</Column>
                  </Row>
                );
              }
            })}
          </tbody>
          <tbody>
            <Row>
              <Column >{currentData.rating ? <ColumnStar><StarRating rating={currentData.rating} /></ColumnStar> : 'No ratings'}</Column>
              <MiddleColumn id='comparisonModalRating'>Average rating</MiddleColumn>
              <Column >{relatedData.rating ? <ColumnStar><StarRating rating={relatedData.rating} /></ColumnStar> : 'No ratings'}</Column>
            </Row>
          </tbody>
        </Table>
        <CloseBtn id='closeModalButton' onClick={onClose}>Close</CloseBtn>
      </Data>
    </Modal>,
    document.getElementById('modal')
  );
};

export default ComparisonModal;