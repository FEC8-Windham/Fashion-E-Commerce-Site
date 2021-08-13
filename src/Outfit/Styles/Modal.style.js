import styled from 'styled-components';

export const Modal = styled.div`
  margin: auto;
  padding: 30px;
  left: 0;
  right: 0;
  border-style: solid;
  background: #fff;
  position: absolute;
  width: 500px;
  height: 300px;
  z-index: 1;
  box-shadow: 0px 0px 1px 1px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Data = styled.span`
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
  overflow: scroll;
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
  font-weight: normal;
  padding: 0;
  margin: 0;
  padding-left: 3px;
`;

export const ProductNames = styled.th`
  width: ${prop => prop.width || '30%'};
  font-size: 18px;
  text-align: center;
`;

export const Column = styled.th`
  width: 30%;
  font-weight: normal;
  color: ${prop => prop.color || 'black'};
  margin: 0;
  text-align: center;
`;

export const MiddleColumn = styled.th`
  width: 40%;
  text-align: center;
`;

export const Row = styled.tr`
  height: 20px;
`;

export const ColumnStar = styled.div`
  margin: auto;
  padding-left: 40px;
`;