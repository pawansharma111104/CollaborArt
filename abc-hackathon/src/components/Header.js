import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">CollaborArt</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/usp">USP</Link></li>
          <li><Link to="/future">Future Development</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
