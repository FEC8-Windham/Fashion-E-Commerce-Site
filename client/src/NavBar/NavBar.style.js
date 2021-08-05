import styled from 'styled-components';

export const Nav = styled.div`
  width: 100%;
  height: 100px;
  background-color: #404040;
  z-index: 100;
}
`;

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  right: 310px;
  top: 24px;
  position: absolute;
`;

export const NavItems = styled.li`
  font-family: Arial, Helvetica, sans-serif;
  float: left;
`;

export const NavLinks = styled.a`
  display: block;
  padding: 10px;
  font-size: 20px;
  color: white;
  text-decoration: none;
  transition: .5s ease;
  &:hover {
    color: #A0A0A0;
  }
`;