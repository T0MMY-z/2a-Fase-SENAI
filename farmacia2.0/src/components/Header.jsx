import React from 'react';
import './Header.css';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <h1>FarMárcia seu mal-estar nossa alegria</h1>
      <p>Sob nova localização!</p>
    </header>
  );
}

export default Header;
