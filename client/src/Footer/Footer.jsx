import React, { useState } from 'react';
import { FooterStyle, TeamName, Link } from './Footer.style';

const Footer = () => {
  return (
    <FooterStyle>
      <TeamName>TEAM WINDHAM</TeamName>
      <Link href='https://github.com/FEC8-Windham/fec'>Link to Github</Link>
    </FooterStyle>
  );
};

export default Footer;