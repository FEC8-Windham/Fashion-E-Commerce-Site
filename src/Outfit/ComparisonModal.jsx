import React from 'react';
import ReactDOM from 'react-dom';
import {
  Modal, Data, CloseBtn,
  Top, Table, Title, ProductNames, Row, Column, MiddleColumn, ColumnStar
} from './Styles/Modal.style';
import StarRating from '../Helper-Components/StarRating.jsx';

const ComparisonModal = ({ relatedData, currentData, isOpen, onClose }) => {
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
    <Modal>
      <Data>
        <Title>Comparing</Title>
        <Top>
          <tbody>
            <Row>
              <ProductNames>{currentData.name}</ProductNames>
              <ProductNames width='40%'>Name</ProductNames>
              <ProductNames>{relatedData.name}</ProductNames>
            </Row>
          </tbody>
        </Top>
        <br></br>
        <Table>
          <tbody>
            <Row>
              <Column>{currentData.category}</Column>
              <MiddleColumn>Category</MiddleColumn>
              <Column>{relatedData.category}</Column>
            </Row>
            <Row>
              {currentData.sale ? <Column color='red'>${currentData.sale}</Column> : <Column >${currentData.default_price}</Column>}
              <MiddleColumn>Default Price</MiddleColumn>
              <Column>${relatedData.default_price}</Column>
            </Row>
            <Row>
              <Column>{currentData.numberStyles}</Column>
              <MiddleColumn>Number of Styles</MiddleColumn>
              <Column>{relatedData.numberStyles}</Column>
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
                  <Column>{value}</Column>
                  <MiddleColumn>{feature.feature}</MiddleColumn>
                  <Column>{feature.value || 'N/A'}</Column>
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
                    <Column>{feature.value || 'N/A'}</Column>
                    <MiddleColumn>{feature.feature}</MiddleColumn>
                    <Column>{value2}</Column>
                  </Row>
                );
              }
            })}
          </tbody>
          <tbody>
            <Row>
              <Column >{currentData.rating ? <ColumnStar><StarRating rating={currentData.rating} /></ColumnStar> : 'No ratings'}</Column>
              <MiddleColumn>Average rating</MiddleColumn>
              <Column >{relatedData.rating ? <ColumnStar><StarRating rating={relatedData.rating} /></ColumnStar> : 'No ratings'}</Column>
            </Row>
          </tbody>
        </Table>
        <CloseBtn onClick={onClose}>Close</CloseBtn>
      </Data>
    </Modal>,
    document.getElementById('modal')
  );
};

export default ComparisonModal;