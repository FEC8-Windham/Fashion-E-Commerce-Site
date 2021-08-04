import styled from 'styled-components';


export const Container = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding ? 0 : '5px'};
  float: ${props => props.float};
  text-align: ${props => props.float};
  overflow-wrap: break-word;
  border-bottom: ${props => props.border};
`;

export const BreakdownContainer = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
  float: ${props => props.float};
  text-align: ${props => props.float};
  font-weight: ${props => props.weight};;
  padding: ${props => props.padding ? '0px' : '5px'};
  margin-bottom: 4px;

`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self:stretch;
  width: 500px;
  margin-bottom: ${props => props.margin};;
`;

export const TileFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-self:stretch;
  width: fit-content;
  min-height: 550px;
  min-width: 500px;
`;

export const ReviewModuleFlexContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-self:stretch;
`;

export const RatingDiv = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  background: lightgray;
  color: white;
  text-decoration: underline;
`;
export const RatingDivText = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
`;

export const ZSpan = styled.span`
  position: absolute;
  padding: 3px;
  font-size: 11px;
  font-weight: bold;
  color: black;
`;

export const RatingDivCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  height: ${props => props.height};
  width: ${props => props.width};
  margin-bottom: 4px;
  font-size: ${props => props.fontSize};
`;

export const FullWidthDiv = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  border-bottom: ${props => props.border};
  font-size: ${props => props.fontSize};
  vertical-align: text-top;
  background-color: white;
  padding: 3px;

`;

export const ImageFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  align-self:stretch;
  background-color: white;
  border-bottom: ${props => props.border};

`;

export const BreakdownFlexContainer = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
  background: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-self: stretch;
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
  height: 0px;
  width: 0px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid black;
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
  margin-top: 5px;
`;

export const CharLabelDiv = styled.div`
  font-size: 12px;
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
  height: fit-content;
  background-color: white;
  padding: 0 10px 0 10px;
`;

export const StarCont = styled.div`
  width: 10px;
  height: 10px;
`;

export const FullWidthForm = styled.form`
vertical-align: text-top;
  height: ${props => props.height};
  width: ${props => props.width};
  border-bottom: ${props => props.border};
  font-size: ${props => props.fontSize};
  padding: 3px;
  background-color: white;
`;

export const RadioBox = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 200px;
  height: 75px;
  border-bottom: 1px solid black;
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

export const RatingSpan = styled.span`
  font-size: 45px;
`;
export const ButtonCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self:stretch;
  width: 500px;
`;
export const Button = styled.button`
  background: transparent;
  box-shadow: 0px 0px 0px transparent;
  border: 1px solid black;
  text-shadow: 0px 0px 0px transparent;
  font-size: 12px;
  font-weight: bold;
  width: 110px;
  height: 50px;
  margin-right: 30px;
  margin: ${props => props.margin};
`;

export const HelpfulSpan = styled.span`
  font-size: 7px;
`;
