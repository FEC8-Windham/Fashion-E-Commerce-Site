import styled from 'styled-components';

export const RowContainer = styled.div`
  margin: auto;
  padding: 0px;
  width: 800px;
  height: 360px;
  overflow-x: scroll;
  position: relative;
  white-space: nowrap;
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
`;

export const PreviousButton = styled.button`
  position: relative;
  border: none;
  /* background: none; */
  z-index: 1;
  font-weight: bold;
`;

export const NextButton = styled.button`
  position: relative;
  border: none;
  /* background: none; */
  z-index: 1;
  font-weight: bold;
`;