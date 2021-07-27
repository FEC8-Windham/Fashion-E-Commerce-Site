import React from 'react';
import ReactDOM from 'react-dom';
import {
  Modal, Data, CloseBtn,
  Table, Title, ProductNames, Row, Column1, Column2, Column3
} from './styles/Modal.style';

const ComparisonModal = ({ message, isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <Modal>
      <Data>
        <Title>Comparing</Title>
        <Table>
          <tbody>
            <Row>
              <ProductNames>{message}</ProductNames>
              <ProductNames align={'right'}>Current product</ProductNames>
            </Row>
          </tbody>
        </Table>
        <br></br>
        <Table>
          <tbody>
            <Row>
              <Column1>✓</Column1>
              <Column2>GMO and Pesticide-free</Column2>
              <Column3></Column3>
            </Row>
            <Row>
              <Column1></Column1>
              <Column2>Made with 100% Genetic Modification</Column2>
              <Column3>✓</Column3>
            </Row>
            <Row>
              <Column1>✓</Column1>
              <Column2>This is made up</Column2>
              <Column3></Column3>
            </Row>
            <Row>
              <Column1>✓</Column1>
              <Column2>Feature description</Column2>
              <Column3>✓</Column3>
            </Row>
            <Row>
              <Column1>✓</Column1>
              <Column2>Uses React Hooks</Column2>
              <Column3></Column3>
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