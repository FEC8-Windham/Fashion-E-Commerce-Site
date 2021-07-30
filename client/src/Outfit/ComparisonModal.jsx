import React from 'react';
import ReactDOM from 'react-dom';
import {
  Modal, Data, CloseBtn,
  Top, Table, Title, ProductNames, Row, Column1, Column2, Column3
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
    <Modal>
      <Data>
        <Title>Comparing</Title>
        <Top>
          <tbody>
            <Row>
              <ProductNames>{currentData.name}</ProductNames>
              <ProductNames align={'right'}>{relatedData.name}</ProductNames>
            </Row>
          </tbody>
        </Top>
        <br></br>
        <Table>
          <tbody>
            <Row>
              <Column1>{currentData.category}</Column1>
              <Column2>Category</Column2>
              <Column3>{relatedData.category}</Column3>
            </Row>
            <Row>
              {currentData.sale ? <Column1 color='red'>${currentData.sale}</Column1> : <Column1>${currentData.default_price}</Column1>}
              <Column2>Default Price</Column2>
              <Column3>${relatedData.default_price}</Column3>
            </Row>
            <Row>
              <Column1>{currentData.numberStyles}</Column1>
              <Column2>Number of Styles</Column2>
              <Column3>{relatedData.numberStyles}</Column3>
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
                  <Column1>{value}</Column1>
                  <Column2>{feature.feature}</Column2>
                  <Column3>{feature.value || 'N/A'}</Column3>
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
                    <Column1>{feature.value || 'N/A'}</Column1>
                    <Column2>{feature.feature}</Column2>
                    <Column3>{value2}</Column3>
                  </Row>
                );
              }
            })}
          </tbody>
          <tbody>
            <Row>
              <Column1><StarRating rating={currentData.rating} /></Column1>
              <Column2>Average rating</Column2>
              <Column3>{relatedData.rating ? <StarRating rating={relatedData.rating} /> : 'No ratings'}</Column3>
            </Row>
          </tbody>
        </Table>
        <CloseBtn id='closeModal' onClick={onClose}>Close</CloseBtn>
      </Data>
    </Modal>,
    document.getElementById('modalHere')
  );
};

export default ComparisonModal;