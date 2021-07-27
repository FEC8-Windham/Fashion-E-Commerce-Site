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

export const ImageFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  align-self:stretch;
  background: green;


`;
