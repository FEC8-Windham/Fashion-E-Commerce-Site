import styled from 'styled-components';

export const RowContainer = styled.div`
  margin: 0px;
  margin-left: 50px;
  padding: 0px;
  width: 850px;
  height: 100%;
  overflow: scroll;
  position: relative;
`;

export const SectionTitle = styled.h4`
  margin-bottom: -10px;
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

export const NextButton = styled.button`
  position: relative;
  bottom: 160px;
  right: 20px;
  border: none;
  background: none;
  z-index: 1;
  font-weight: bold;
`;