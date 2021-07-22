import styled from 'styled-components';

export const CardContainer = styled.div`
  display: inline-block;
  margin-right: 20px;
  white-space: normal;
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
`;

export const Info = styled.div`
  weight: 180px;
  height: 100px;
  padding-left: 5px;
  padding-right: 5px;
  font-family: Arial, Helvetica, sans-serif;

`;

export const Pic = styled.img`
  width: 180px;
  height: 200px;
  border-bottom: 1px solid black;
  margin: 0px;
  padding: 0px;
  transition: .5s ease;

  &:hover {
    opacity: 0.7;
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