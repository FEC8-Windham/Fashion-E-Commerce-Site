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


export var StyleThumbnail = styled.img`
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

