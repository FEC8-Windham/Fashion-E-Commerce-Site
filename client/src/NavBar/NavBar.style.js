import styled from 'styled-components';

export const Nav = styled.div`
  width: 100%;
  height: 100px;
  background-color: #404040;
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  `;

export const NavList = styled.ul`
  position: absolute;
  list-style: none;
  margin: 0;
  padding-right: 5vw;
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
