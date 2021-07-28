import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  width: 1200px;
  height: 430px;
  padding: 0px;
  position: relative;
`;

export const RowContainer = styled.div`
  padding: 0px;
  height: 405px;
  padding-left: 1px;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
  z-index: 0;
`;

export const SectionTitle = styled.h4`
  margin-bottom: -5px;
  margin-left: 82px;
  font-family: Arial, Helvetica, sans-serif;
  color: dimgray;
`;

export const FadeoutRight = styled.div`
  margin: auto;
  padding: 0px;
  width: 1031px;
  height: 405px;
  mask-image: ${prop => prop.mask || 'linear-gradient(to right, black 70%, transparent)'};
  z-index: 1;
`;

export const PreviousButton = styled.button`
  position: absolute;
  border: none;
  margin: 0px;
  padding: 0;
  left: 66px;
  top: 200px;
  background: none;
  z-index: 1;
  font-weight: bold;
  font-size: large;

`;

export const NextButton = styled.button`
  position: absolute;
  border: none;
  margin: 0px;
  bottom: 240px;
  right: 66px;
  float: right;
  background: none;
  z-index: 1;
  font-weight: bold;
  font-size: large;
`;