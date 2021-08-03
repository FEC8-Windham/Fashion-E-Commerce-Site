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

export const charCont = styled.div`
    background-color: black;
`;


export const CharIndicator = styled.div`
z-index: 1;
position:relative;
left: ${props => props.position}};
background-color: black;
height: 5px;
width: 5px;
`;

export const NoPadContainer = styled.div`
width: ${props => props.width};
height: ${props => props.height};
padding: ${props => props.padding};
background: ${props => props.bgColor};
float: ${props => props.float};
text-align: ${props => props.float};
overflow-wrap: break-word;
`;

export const CharLabelFlex = styled.div`
display: flex;
flex-direction: row;
justify-content: left;
height: ${props => props.height};
width: ${props => props.width};
`;

export const CharLabelDiv = styled.div`
width:33.33%;
text-align: ${props => props.align};
`;

export const CharBackG = styled.div`
height: 5px;
width: 100%;
background-color: lightgray;
`;


export const Form = styled.div`
display: flex;
flex-direction: column;
align-content: center;
width: 500px;
height: 500px;
background-color: white;
`;

export const StarCont = styled.div`
width: 10px;
height: 10px;
background-color: purple;
`;

export const FullWidthForm = styled.form`
height: ${props => props.height};
width: ${props => props.width};
background-color: lightgray;
border: solid 1px;
`;

export const RadioBox = styled.div`
display: flex;
flex-direction: column;
align-content: center;
width: 200px;
height: 75px;
`;

export const RadioInput = styled.input`
text-align: center;
align-content: center;
width: 100%;
margin: 0;
`;

export const RadioLabel = styled.div`
width: 100%;
height: 55px;
align-content: center;
text-align: center;

`;

export const RadioContainer = styled.div`
display: flex;
flex-direction: row;
`;