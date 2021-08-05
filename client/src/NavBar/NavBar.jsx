import React from 'react';
import { Nav, NavList, NavItems, NavLinks } from './NavBar.style';

const NavBar = () => {
  return (
    <Nav>
      <NavList>
        <NavItems><NavLinks href='#moduleOverview'>Overview</NavLinks></NavItems>
        <NavItems><NavLinks href='#moduleOutfit'>Outfits</NavLinks></NavItems>
        <NavItems><NavLinks href='#moduleReview'>Reviews</NavLinks></NavItems>
      </NavList>
    </Nav>
  );
};

export default NavBar;