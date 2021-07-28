import styled from 'styled-components';

export const Container = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
  background: ${props => props.bgColor};
  float: ${props => props.float};
  text-align: ${props => props.float};
  overflow-wrap: break-word;
  border: 1px solid;
  padding: 5px;
`;

export const BreakdownContainer = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
  background: ${props => props.bgColor};
  float: ${props => props.float};
  text-align: ${props => props.float};
  padding: 5px;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self:stretch;
  background: gray;
  width: 500px;
  border-bottom: 1px solid black;
`;

export const TileFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self:stretch;
  background: gray;
  width: fit-content;
  border-bottom: 1px solid black;
`;

export const ReviewModuleFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  align-self:stretch;
  background: green;
`;

export const RatingDiv = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  background: green;
  color: white;
`;
export const RatingDivText = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
`;

export const ZSpan = styled.span`
  position: absolute;
  color: black;
`;

export const RatingDivCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  height: ${props => props.height};
  width: ${props => props.width};
`;

export const FullWidthDiv = styled.div`
 height: ${props => props.height};
  width: ${props => props.width};
  background-color: lightgray;
`;

export const ImageFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  align-self:stretch;
  background: green;
`;

export const BreakdownFlexContainer = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
  background: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  background: gray;
`;

export const Float = styled.div`
    display: flex; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    justify-content: center;
  `;

export const Close = styled.button`
    position: absolute;
    left: 0;
    top: 0;
  `;


