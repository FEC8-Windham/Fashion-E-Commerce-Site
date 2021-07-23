import styled from 'styled-components';

export const CardContainer = styled.div`
  display: inline-block;
  margin-right: ${props => props.margin};
  white-space: normal;
  overflow: hidden;
`;

export const Card = styled.div`
  width: 180px;
  height: 300px;
  background-color: light-gray;
  border: 1px solid black;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;

export const Info = styled.div`
  weight: 180px;
  height: 100px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 5px;
  font-family: Arial, Helvetica, sans-serif;

`;

export const ImageContainer = styled.div`
  width: 180px;
  height: 200px;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
`;

export const Pic = styled.img`
  width: 180px;
  height: 200px;
  border-bottom: 1px solid black;
  margin: 0px;
  padding: 0px;
  transition: .5s ease;
  overflow: hidden;

  &:hover {
    opacity: 0.7;
    transform: scale(1.05);
  }
`;

export const Category = styled.span`

`;

export const Title = styled.span`
  font-weight: bold;
`;

export const Price = styled.span`
  font-size: x-small;
`;

export const Rating = styled.span`

`;