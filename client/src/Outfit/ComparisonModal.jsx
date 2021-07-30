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
    <Modal id='comparisonModal'>
      <Data>
        <Title id='comparisonTitle'>Comparing</Title>
        <Top>
          <tbody>
            <Row>
              <ProductNames id='comparisonModalCurrentDataName'>{currentData.name}</ProductNames>
              <ProductNames id='comparisonModalName' width='60%'></ProductNames>
              <ProductNames id='comparisonModalRelatedDataName'>{relatedData.name}</ProductNames>
            </Row>
          </tbody>
        </Top>
        <br></br>
        <Table>
          <tbody>
            <Row>
              <Column1 id='comparisonModalCurrentDataCategory'>{currentData.category}</Column1>
              <Column2 id='comparisonModalCategory'>Category</Column2>
              <Column3 id='comparisonModalRelatedDataCategory'>{relatedData.category}</Column3>
            </Row>
            <Row>
              {currentData.sale ? <Column1 id='comparisonModalCurrentDataSalePrice' color='red'>${currentData.sale}</Column1> : <Column1 id='comparisonModalCurrentDataPrice'>${currentData.default_price}</Column1>}
              <Column2 id='comparisonModalPrice'>Default Price</Column2>
              <Column3 id='comparisonModalRelatedDataPrice'>${relatedData.default_price}</Column3>
            </Row>
            <Row>
              <Column1 id='comparisonModalCurrentDataStyles'>{currentData.numberStyles}</Column1>
              <Column2 id='comparisonModalStyles'>Number of Styles</Column2>
              <Column3 id='comparisonModalRelatedDataStyles'>{relatedData.numberStyles}</Column3>
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
                  <Column1 id='comparisonModalCurrentDataFeature'>{value}</Column1>
                  <Column2 id='comparisonModalFeature'>{feature.feature}</Column2>
                  <Column3 id='comparisonModalRelatedDataFeature'>{feature.value || 'N/A'}</Column3>
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
                    <Column1 id='comparisonModalCurrentDataFeature'>{feature.value || 'N/A'}</Column1>
                    <Column2 id='comparisonModalFeature'>{feature.feature}</Column2>
                    <Column3 id='comparisonModalRelatedDataFeature'>{value2}</Column3>
                  </Row>
                );
              }
            })}
          </tbody>
          <tbody>
            <Row>
              <Column1 >{currentData.rating ? <StarRating rating={currentData.rating} /> : 'No ratings'}</Column1>
              <Column2 id='comparisonModalRating'>Average rating</Column2>
              <Column3>{relatedData.rating ? <StarRating rating={relatedData.rating} /> : 'No ratings'}</Column3>
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