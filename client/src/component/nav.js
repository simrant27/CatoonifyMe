import React from 'react';
import './css/nav.css';

export default function Nav() {
  const activePage = 'home'; // Replace with real state/logic if needed

  return (
    <div className="container1">
      <header>
        <div className="logo">
          <img src="./logo.png" alt="Logo" className="logo-img" />
        </div>
        <nav>
          <ul>
            <li><a href="/" className={activePage === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="/explore" className={activePage === 'explore' ? 'active' : ''}>Explore</a></li>
            <li><a href="./about" className={activePage === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="/contact" className={activePage === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
