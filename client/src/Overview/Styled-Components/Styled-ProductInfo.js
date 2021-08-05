import styled from 'styled-components';


export var Overview = styled.div`
  margin: auto;
  padding-top: 50px;
  /* margin-left: 200px; */
  width:1500px;
  height: 850px;
`;

export var ImageGalleryContainer = styled.div`
`;

export var MainImageContainer = styled.div`
  float:left;
  width: 828px;
  height: 644px;
  background-color: black;
  margin-right: 5vh;
  position: relative;
  margin-left: 100px;
`;

export var MainImage = styled.img`
  float:left;
  height:100%;
  width: 100%;
  object-fit: contain;
  position:relative;
  cursor: zoom-in;
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
  font-size: 25px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  left : 10%;
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
  font-size: 25px;
  transition: 0.6s ease;
  border-radius: 3px 0 0 3px;
  user-select: none;
  right:0;
`;

export var MainThumbContainer = styled.div`
  position: absolute;
  width: 10%;
  height:100%
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
`;

export var CarouselContainer = styled.div`
  top:0;
  height:85%;
  overflow: hidden;
  position: relative;
`;

export var InnerCarousel = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
  height:100%;
  width:100%;
  position:absolute;
`;

export var MainThumbImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${100 / 7}%;
`;

export var MainThumbImg = styled.img`
  position: absolute;
  width:80%;
  height: 80%;
  padding:10%;
  opacity: ${props => props.selected ? '0.5' : '1'};
  cursor: pointer;
  object-fit: cover;
`;

export var ExpandModalContainer = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export var ExpandImgContainer = styled.div`
`;

export var ExpandPrevArrow = styled.a`
  cursor: pointer;
  position: absolute;
  top: 43%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 35px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  left : 5%;
  transform: rotate(180deg);
  z-index: 2;
`;

export var ExpandNextArrow = styled.a`
  cursor: pointer;
  position: absolute;
  top: 43%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 35px;
  transition: 0.6s ease;
  border-radius: 3px 0 0 3px;
  user-select: none;
  right:5%;
  z-index: 2;
`;

export var ZoomedContainer = styled.div`
  width:1500px;
  height:800px;
  overflow: auto;
  background:black;
  position: relative;
`;

export var ExpandedImg = styled.img`
  max-width:100%;
  max-height:100%;
  display:block;
  margin:auto;
  position: relative;
  transform: ${props => props.zoom ? 'scale(3)' : 'none'};
  transform-origin: ${props => props.xPos}px ${props => props.yPos}px;
  cursor: zoom-in;
  cursor: ${props => props.zoom ? 'zoom-out' : 'zooom-in'};
`;

export var ExitButton = styled.div`
  z-index: 2;
  font-size: 21px;
  font-weight: bold;
  color: white;
  position: absolute;
  top: 2%;
  right: 2%;
  border: 2x solid white;
  cursor:pointer;
`;

export var IconsContainer = styled.div`
  text-align:center
`;

export var Icons = styled.span`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: ${props => props.selected ? '#717171' : '#bbb'};
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  position: relative;
  text-align:center;
`;

export var ProductInfoContainer = styled.div`
  float:left;
  width: 450px;
  height: 644px;
  object-fit: contain;
`;

export var InfoContainer = styled.div`
`;

export var StarContainer = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  margin-right: 5%;
  overflow: hidden;
`;

export var Star = styled.span`
  font-size: 15px;
  background: linear-gradient(90deg, gold ${(props) => props.yellowPercentage}%, darkgray ${(props) => props.yellowPercentage}% ${props => 100 - props.yellowPercentage}%);
  color:black;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  float: left;
`;

export var SeeAllReviews = styled.div`
  font-size: 13px;
  margin-left: 15%;
  padding-left: 5%;
  vertical-align: middle;
  text-decoration: underline;
  cursor: pointer;
`;

export var Category = styled.div`
  margin-top: 2%;
  text-transform: uppercase;
  font-size: 17px;
  font-family: Arial, Helvetica, sans-serif;
`;

export var Name = styled.div`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 2%;
  font-family: Arial, Helvetica, sans-serif;
`;

export var Price = styled.div`
  margin-top: 2%;
  margin-bottom: 4%;
  font-family: Arial, Helvetica, sans-serif;
`;

export var OriginalPrice = styled.div`
  font-size: 17px;
  float: ${props => props.sale ? 'left' : 'none'};
  margin-right:15px;
  text-decoration: ${props => props.sale ? 'line-through' : 'none'};
  font-family: Arial, Helvetica, sans-serif;
`;

export var SalePrice = styled.div`
  font-size: 17px;
  color: red;
  font-family: Arial, Helvetica, sans-serif;
`;

export var TextStyle = styled.span`
  font-weight: bold;
  font-size: 17px;
  font-family: Arial, Helvetica, sans-serif;
`;

export var StyleName = styled.span`
  font-size: 17px;
  font-family: Arial, Helvetica, sans-serif;
`;

export var StylesContainer = styled.div`
  width:360px;
  overflow:auto;
  margin-top: 5%;
`;

export var ThumbnailContainer = styled.div`
  width:90px;
  height: 90px;
  float:left;
  position:relative;
`;

export var CheckMark = styled.img`
  z-index: 1;
  float: left;
  right: 10px;
  top: 10px;
  position: absolute;
  border-radius: 5px;
  width: 20px;
`;

export var ThumbImg = styled.img`
  border-radius: 50%;
  width:70px;
  height: 70px;
  padding: 5px;
  cursor: pointer;
  object-fit: cover;
`;

export var ShareButtons = styled.div`
  margin-top: 7%;
  display: inline-block;
  width: 500px;
`;

export var Facebook = styled.div`
  float:left;
  margin-left: 1%;
`;

export var Twitter = styled.div`
  float:left;
  margin-left: 1%;
`;

export var Pinterest = styled.div`
  float:left;
  top: 20px;
  right:100px;
  margin-left: 1%;
`;

export var CartContainer = styled.div`
  margin-top: 5%;
  height: 150px;
`;

export var SizeMessage = styled.span`
  color: red;
`;

export var SizeSelect = styled.select`
  float:left;
  size:2;
  margin-bottom: 5%;
  margin-right: 5%;
  width:250px;
  height: 60px;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  font-size: 17px;
`;

export var QuantitySelect = styled.select`
  margin-bottom: 5%;
  width:150px;
  height: 60px;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  font-size: 17px;
`;

export var CartButton = styled.button`
  cursor: pointer;
  width:300px;
  height: 60px;
  text-align: left;
  font-size: 17px;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
`;

export var Slogan = styled.div`
  clear:both;
  font-weight: bold;
  color: black;
  padding-top: 2%;
  padding-left: 45px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  margin-left: 90px;
`;

export var Description = styled.div`
  padding-top: 1%;
  padding-left: 45px;
  width: 767px;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 90px;
`;