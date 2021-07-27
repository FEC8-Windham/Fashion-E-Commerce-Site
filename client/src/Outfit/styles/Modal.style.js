import styled from 'styled-components';

export const Modal = styled.div`
  margin: auto;
  padding: 20px;
  left: 0;
  right: 0;
  border-style: solid;
  border-radius: 5px;
  background: #fff;
  width: 500px;
  height: 600px;
  position: absolute;
  z-index: 1;
`;

export const Data = styled.span`
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;