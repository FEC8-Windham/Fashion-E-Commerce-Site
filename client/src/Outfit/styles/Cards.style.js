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
  width: 800px;
  height: 360px;
  overflow-x: hidden;
  position: relative;
  white-space: nowrap;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const SectionTitle = styled.h4`
  margin-bottom: -10px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Fadeout = styled.div`
  margin: 0px;
  padding: 0px;
  width: 180px;
  height: 350px;
  white-space: nowrap;
  mask-image: linear-gradient(to right, black 0%, transparent 100%);
  display: inline-block;
  z-index: 1;
`;

export const PreviousButton = styled.button`
  position: absolute;
  border: none;
  margin: 0px;
  padding: 0px;
  left: 15px;
  top: 160px;
  /* background: none; */
  z-index: 1;
  font-weight: bold;
`;

export const NextButton = styled.button`
  position: absolute;
  border: none;
  margin: 0px;
  bottom: 190px;
  right: 20px;
  float: right;
  /* background: none; */
  z-index: 1;
  font-weight: bold;
`;