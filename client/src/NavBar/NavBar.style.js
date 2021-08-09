import styled from 'styled-components';

export const Nav = styled.span`
  background-color: ${prop => prop.color || '#333'}; /* Black background color */
  position: fixed; /* Make it stick/fixed */
  top: 0; /* Stay on top */
  width: 100%; /* Full width */
  height: 100px;
  transition: top 0.3s; /* Transition effect when sliding down (and up) */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  z-index: 100;
  `;

export const Logo = styled.img`

`;

export const NavList = styled.ul`
  position: absolute;
  list-style: none;
  margin: 0;
  padding-right: 130px;
  `;

export const NavItems = styled.li`
  font-family: Arial, Helvetica, sans-serif;
  float: left;
`;

export const NavLinks = styled.a`
  display: block;
  padding: 10px;
  font-size: 24px;
  color: white;
  text-decoration: none;
  transition: .5s ease;
  &:hover {
    color: #A0A0A0;
  }
`;

export const DarkModeBtn = styled.button`
  position: absolute;
  right: 0;
  top: -26px;
  height: 100px;
  width: 100px;
  font-size: 24px;
  border: none;
  transition: 0.3s ease;
  cursor: pointer;

  background-color: ${prop => prop.bg || '#ebe4e4'};
  color: ${prop => prop.color || 'black'};

  &:hover {
    background-color: ${prop => prop.hoverbg || '#333'};
    color: ${prop => prop.hovercolor || 'white'};
  }
`;