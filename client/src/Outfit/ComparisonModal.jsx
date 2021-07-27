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
    Features (if same category)
    Average rating
  */
  var sameCategory = false;

  if ((relatedData && currentData) && relatedData.category === currentData.category) {
    sameCategory = true;
  }

  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <Modal>
      <Data>
        <Title>Comparing</Title>
        <Top>
          <tbody>
            <Row>
              <ProductNames>{relatedData.name}</ProductNames>
              <ProductNames align={'right'}>{currentData.name}</ProductNames>
            </Row>
          </tbody>
        </Top>
        <br></br>
        <Table>
          <tbody>
            <Row>
              <Column1>{relatedData.category}</Column1>
              <Column2>Category</Column2>
              <Column3>{currentData.category}</Column3>
            </Row>
            <Row>
              <Column1>${relatedData.default_price}</Column1>
              <Column2>Default Price</Column2>
              <Column3>${currentData.default_price}</Column3>
            </Row>
            <Row>
              <Column1>{relatedData.numberStyles}</Column1>
              <Column2>Number of Styles</Column2>
              <Column3>{currentData.numberStyles}</Column3>
            </Row>
          </tbody>
          {sameCategory ?
            <tbody>
              {relatedData.features.map((feature, i) => {
                return (
                  <Row key={feature.value}>
                    <Column1>{feature.value || 'N/A'}</Column1>
                    <Column2>{feature.feature}</Column2>
                    <Column3>{currentData.features[i].value || 'N/A'}</Column3>
                  </Row>
                );
              })}
              {currentData.features.map((feature, i) => {
                return (
                  <Row key={feature.value}>
                    <Column1>{relatedData.features[i].value || 'N/A'}</Column1>
                    <Column2>{feature.feature}</Column2>
                    <Column3>{feature.value || 'N/A'}</Column3>
                  </Row>
                );
              })}
            </tbody>
            :
            <tbody>
              {relatedData.features.map((feature, i) => {
                return (
                  <Row key={feature.value}>
                    <Column1>{feature.value || 'N/A'}</Column1>
                    <Column2>{feature.feature}</Column2>
                    <Column3>{'N/A'}</Column3>
                  </Row>
                );
              })}
              {currentData.features.map((feature, i) => {
                return (
                  <Row key={feature.value}>
                    <Column1>{'N/A'}</Column1>
                    <Column2>{feature.feature}</Column2>
                    <Column3>{feature.value || 'N/A'}</Column3>
                  </Row>
                );
              })}
            </tbody>
          }
          <tbody>
            <Row>
              <Column1>{relatedData.rating ? <StarRating rating={relatedData.rating} /> : 'No ratings'}</Column1>
              <Column2>Average rating</Column2>
              <Column3><StarRating rating={currentData.rating}/></Column3>
            </Row>
          </tbody>
        </Table>
        <CloseBtn onClick={onClose}>Close</CloseBtn>
      </Data>
    </Modal>,
    document.getElementById('modalHere')
  );
};

export default ComparisonModal;