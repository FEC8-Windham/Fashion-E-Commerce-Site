import styled from 'styled-components';

export const Nothing = styled.div`
  display: none;
`;

export const Background = styled.div`
  margin: 0px;
  padding: 0px;
  height: 100vh;
  width: 100vw;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
  position: absolute;
  overflow-y: hidden;
`;

export const OverviewModal = styled.div`
  margin: auto;
  right: 0;
  left: 0;
  top: 50%;
  bottom: 50%;
  width: 600px;
  height: 400px;
  background-color: white;
  z-index: 2;
  position: fixed;
  border: 1px solid black;
`;


export const ComparisonModalContainer = styled.div`
  margin: auto;
  width: 400px;
  height: 300px;
  background-color: gray;
  z-index: 2;
  position: absolute;
  left: 50%;
`;

export const ComparisonModal = styled.div`
  width: 100%;
  height: 100%;

`;

export const NewReviewModal = styled.div`


`;

export const ReviewImageModal = styled.div`


`;