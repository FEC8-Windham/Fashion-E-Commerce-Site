import styled from 'styled-components';

export const FooterStyle = styled.span`
  width: 100vw;
  background-color: #333;
  top: 300;
  height: 150px;
  position: absolute;
  text-align: center;
`;

export const TeamName = styled.h1`
  color: #626a7a;
  font-family: Arial, Helvetica, sans-serif;
  /* text-align: center; */
  top: 35px;
  position: relative;
  transition: 0.2s ease;
  &:hover {
    color: white;
  }
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  margin: auto;
  left: 0;
  right: 0;
  top: 95px;
  position: absolute;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;