import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Data, CloseBtn } from './styles/Modal.style';

const ComparisonModal = ({ message, isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <Modal>
      <Data>{message}</Data>
      <CloseBtn onClick={onClose}>Close</CloseBtn>
    </Modal>,
    document.getElementById('modalHere')
  );
};

export default ComparisonModal;