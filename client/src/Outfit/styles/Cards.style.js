import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  width: 900px;
  height: 360px;
  padding: 0px;
  position: relative;
`;

export const RowContainer = styled.div`
  margin: auto;
  padding: 0px;
  width: 790px;
  height: 360px;
  overflow-x: hidden;
  position: relative;
  white-space: nowrap;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
  z-index: 0;
`;

export const SectionTitle = styled.h4`
  margin-bottom: -10px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const FadeoutRight = styled.div`
  margin: auto;
  padding: 0px;
  width: 750px;
  height: 360px;
  mask-image: ${prop => prop.mask || 'linear-gradient(to right, black 80%, transparent)'};
  z-index: 1;
`;

export const PreviousButton = styled.button`
  position: absolute;
  border: none;
  margin: 0px;
  padding: 0;
  left: 58px;
  top: 160px;
  background: none;
  z-index: 1;
  font-weight: bold;
`;

export const NextButton = styled.button`
  position: absolute;
  border: none;
  margin: 0px;
  bottom: 180px;
  right: 58px;
  float: right;
  background: none;
  z-index: 1;
  font-weight: bold;
`;