import styled from 'styled-components';

export var Star = styled.span`
  background: linear-gradient(90deg, gold ${(props) => props.yellowPercentage}%, darkgray ${(props) => props.yellowPercentage}% ${props => 100 - props.yellowPercentage}%);
  color:black;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;


export var Category = styled.div`



`;

export var Name = styled.div`



`;

export var Price = styled.div`

`;


export var OriginalPrice = styled.div`
// if props is true, cross it out
float:left;
margin-right:15px;
text-decoration: ${props => props.sale ? 'line-through' : 'none'};
`;

export var SalePrice = styled.div`
color: red;

`;


export var ThumbImg = styled.img`
  border-radius: 50%;
  width:40px;
  height: 40px;
  padding: 5px;
  float: left;
`;

export var StylesContainer = styled.div`
  width:200px;
  height: 120px;
`;


export var Size = styled.div`



`;

export var Description = styled.div`



`;

export var Slogan = styled.div`
  font-weight: bold;
`;

export var Facebook = styled.div`
float:left;

`;

export var Twitter = styled.div`
float:left;

`;

export var Pinterest = styled.div`
float:left;
top: 20px;
right:100px;

`;

export var ShareButtons = styled.div`


display: inline-block;

`;

export var CheckMark = styled.img`
  z-index: 1;
  float: left;
  right: 5px;
  top: 5px;
  position: absolute;
  border-radius: 5px;
  width: 10px;
`;

export var ThumbnailContainer = styled.div`
  position: relative;
  width:50px;
  height: 50px;
  float:left;
  `;

export var SizeSelect = styled.select`
  float:left;
  size: 2;
`;

export var QuantitySelect = styled.select`

`;

export var CartButton = styled.button`

`;

export var CartContainer = styled.div`

`;

export var SizeMessage = styled.span`
  color: red;

`;