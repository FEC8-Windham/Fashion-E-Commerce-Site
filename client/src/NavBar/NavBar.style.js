import styled from 'styled-components';

export const Nav = styled.div`
  background-color: #333; /* Black background color */
  position: fixed; /* Make it stick/fixed */
  top: 0; /* Stay on top */
  width: 100%; /* Full width */
  height: 7vh;
  transition: top 0.3s; /* Transition effect when sliding down (and up) */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  z-index: 100;
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
