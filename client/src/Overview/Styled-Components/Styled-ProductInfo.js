import styled from 'styled-components';


export var Overview = styled.div`
  margin: auto;
  left: 0;
  right:0;
  width:150vh;
  height: 100vh;
`;

export var ProductInfoContainer = styled.div`
  float:left;
  width: 55vh;
  height: 70vh;
`;

export var InfoContainer = styled.div`
  width: 55vh;
  height: 50vh;
`;

export var MainImage = styled.img`
  float:left;
  height:100%;
  width: 100%;
  object-fit: contain;
  position:relative;
cursor: url('/Lib/MagnifyingGlass.png'), auto;

`;

export var MainImageContainer = styled.div`
 float:left;
 width: 90vh;
 height: 70vh;
  background-color: black;
  margin-right: 5vh;
  position: relative;
`;

export var StarContainer = styled.div`
  margin-top: 5%;
`;

export var Star = styled.span`
font-size: small;
  background: linear-gradient(90deg, gold ${(props) => props.yellowPercentage}%, darkgray ${(props) => props.yellowPercentage}% ${props => 100 - props.yellowPercentage}%);
  color:black;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;


export var Category = styled.div`
  margin-top: 2%;
  text-transform: uppercase;
  font-size: medium;

`;

export var Name = styled.div`
  font-size: xx-large;
  font-weight: bold;
  margin-bottom: 2%;
`;

export var Price = styled.div`
margin-top: 2%;
  margin-bottom: 4%;
`;


export var OriginalPrice = styled.div`
// if props is true, cross it out
font-size: small;
float: ${props => props.sale ? 'left' : 'none'};
margin-right:15px;
text-decoration: ${props => props.sale ? 'line-through' : 'none'};
`;

export var SalePrice = styled.div`
color: red;
font-size: small;

`;


export var ThumbImg = styled.img`
  border-radius: 50%;
  width:40px;
  height: 40px;
  padding: 5px;
  cursor: pointer;

`;

export var TextStyle = styled.span`
  font-weight: bold;
`;

export var StyleName = styled.span``;

export var StylesContainer = styled.div`
  width:200px;
  overflow:auto;

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
  cursor: pointer;
`;

export var CartContainer = styled.div`

`;

export var SizeMessage = styled.span`
  color: red;

`;

export var PrevArrow = styled.a`
   cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  left : 15%;
  transform: rotate(180deg);
`;

export var NextArrow = styled.a`
   cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 3px 0 0 3px;
  user-select: none;
  right:0;
`;

export var MainThumbImg = styled.img`
  position: absolute;
  width:80%;
  height: 80%;
  padding:10%;
  opacity: ${props => props.selected ? '0.5' : '1'};
  cursor: pointer;

  `;

export var MainThumbImgContainer = styled.div`
position: relative;
width: 100%;
height: ${100 / 7}%;

`;


export var MainThumbContainer = styled.div`
position: absolute;
width: 10%;
height:100%;

`;


export var ThumbPrevArrow = styled.div`
     cursor: pointer;
  position: relative;
  width: auto;
  margin-top: 5%;
  margin-left: 50%;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 5% 0 0 5%;
  user-select: none;
    transform: rotate(90deg);
    display:inline-block;

`;

export var ThumbNextArrow = styled.div`
cursor: pointer;
  position: relative;
  width: auto;
  margin-top: 10%;
  margin-left: 50%;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 5% 0 0 5%;
  user-select: none;
  transform: rotate(-90deg);
    display:inline-block;
`
;

export var InnerCarousel = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
  height:100%;
  width:100%;
  position:absolute;

`;

export var NewContainer = styled.div`
  top:0;
  height:85%;
  overflow: hidden;
  position: relative;
`;