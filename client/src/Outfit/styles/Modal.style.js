import styled from 'styled-components';

export const Modal = styled.div`
  margin: auto;
  padding: 30px;
  left: 0;
  right: 0;
  border-style: solid;
  background: #fff;
  position: absolute;
  width: 40%;
  z-index: 1;
  box-shadow: 0px 0px 1px 1px;
`;

export const Data = styled.span`
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 15px;
  font-weight: bold;
  z-index: 1;
  color: #333;
`;

export const Top = styled.table`
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  overflow: scroll;
`;

export const Title = styled.h4`
  font-weight: bold;
  padding: 0;
  padding-left: 3px;
  margin: 0;
`;

export const ProductNames = styled.th`
  width: 50%;
  text-align: ${prop => prop.align || 'left'};
`;

export const Column1 = styled.th`
  width: 20%;
  font-weight: normal;
  color: ${prop => prop.color || 'black'};
`;

export const Column2 = styled.th`
  width: 60%;
  text-align: center;
`;

export const Column3 = styled.th`
  width: 20%;
  font-weight: normal;
`;

export const Row = styled.tr`
  height: 20px;
`;