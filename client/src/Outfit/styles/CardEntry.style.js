import styled from 'styled-components';

export const CardContainer = styled.div`
  display: inline-block;
  margin-right: ${props => props.margin || '20px'};
  white-space: normal;
  overflow: hidden;
  z-index: 0;
  transition: .2s ease;
  &:hover {
    transform: scale(1.005);
  }
`;

export const Card = styled.div`
  width: 240px;
  height: 380px;
  background-color: light-gray;
  border: 1px solid black;
  margin: 0px;
  padding: 0px;
  cursor: ${prop => prop.cursor || 'pointer'};
  position: relative;
  overflow: hidden;
  z-index: 0;

`;

export const Info = styled.div`
  weight: 240px;
  height: 120px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 5px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const ImageContainer = styled.div`
  width: 240px;
  height: 260px;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  z-index: 0;
  position: relative;
  border-bottom: 1px solid black;
  `;

export const Pic = styled.img`
  width: 240px;
  height: 260px;
  border-bottom: 1px solid black;
  margin: 0px;
  padding: 0px;
  bottom: 22px;
  transition: .5s ease;
  overflow: hidden;
  object-fit: cover;

  &:hover {
    opacity: 0.7;
    transform: scale(1.05);
  }
  `;

export const StarButton = styled.button`
  z-index: 1;
  float: left;
  display: inline-block;
  right: 5px;
  top: 1px;
  position: absolute;
  background: none;
  border: none;
  padding: 0px;
  font-size: 22px;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
  color: black;
  cursor: pointer;

`;

export const XButton = styled.button`
  z-index: 1;
  right: 5px;
  top: 1px;
  position: absolute;
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: .2s ease;
  color: darkgray;
  &:hover {
    transform: scale(1.05);
    font-weight: bold;
    color: black;
  }
`;

export const Category = styled.span`
  font-size: 13px;
  text-transform: uppercase;
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 18px;
  position: relative;
`;

export const Price = styled.span`
  font-size: small;
  top: 25px;
  position: relative;
  text-decoration: ${prop => prop.decoration || 'none'};
  color: ${prop => prop.color || 'black'};
`;

export const Prices = styled.div`
  padding: 0;
  float: left;
`;

export const Rating = styled.div`
  position: absolute;
  bottom: 10px;
  font-size: 13px;
`;

export const Add = styled.img`
  width: 90px;
  left: 80px;
  top: 95px;
  margin: auto;
  transition: .2s ease;
  overflow: hidden;
  position: relative;
  &:hover {
    opacity: 0.7;
    transform: scale(1.04);
  }
`;

export const AddOutfit = styled.h2`
  text-align: center;
  position: relative;
  top: 15px;
`;
