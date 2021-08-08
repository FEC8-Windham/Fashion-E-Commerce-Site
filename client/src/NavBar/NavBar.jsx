import React, { useState } from 'react';
import { Nav, NavList, NavItems, NavLinks, DarkModeBtn } from './NavBar.style';

const NavBar = () => {
  const [isDark, setDark] = useState(false);

  var colorChanger = () => {
    var mainDiv = document.getElementById('app');
    if (isDark) {
      setDark(false);
      mainDiv.classList.remove('dark');
      document.body.classList.remove('dark');
    } else {
      setDark(true);
      mainDiv.classList.add('dark');
      document.body.classList.add('dark');
    }
  };

  return (
    <Nav id='navbar'>
      <NavList>
        {isDark ? <DarkModeBtn id='dark' bg={'#333'} color={'white'} hovercolor={'black'} hoverbg={'#ebe4e4'} onClick={colorChanger}>☼</DarkModeBtn> : <DarkModeBtn id='notDark' onClick={colorChanger}>☼</DarkModeBtn>}

        <NavItems><NavLinks href='#'>Overview</NavLinks></NavItems>
        <NavItems><NavLinks href='#moduleOutfit'>Outfits</NavLinks></NavItems>
        <NavItems><NavLinks href='#moduleReview'>Reviews</NavLinks></NavItems>
      </NavList>
    </Nav>
  );
};

export default NavBar;