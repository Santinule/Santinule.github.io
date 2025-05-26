import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="sidebar">
        <div className="nav-section">
          <p className="nav-heading">NAVIGATION</p>
          <nav className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/reading-list" className="nav-link">Reading List</Link>
          </nav>
        </div>
        
        <div className="nav-section">
          <p className="nav-heading">FIND ME ON</p>
          <div className="social-links">
            <a 
              href="https://github.com/Santinule" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <div className="social-icon github-icon"></div>
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/Santiagonule" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <div className="social-icon linkedin-icon"></div>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="mobile-nav">
        <div className="mobile-nav-container">
          <Link to="/" className="mobile-nav-title">Home</Link>
          
          <button className="mobile-menu-button" onClick={toggleMenu}>
            ☰
          </button>
        </div>
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <nav className="mobile-nav-links">
            <Link to="/reading-list" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Reading List</Link>
          </nav>
          
          <div className="mobile-social-links">
            <a 
              href="https://github.com/Santinule" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mobile-social-link"
            >
              <div className="social-icon github-icon"></div>
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/Santiagonule" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mobile-social-link"
            >
              <div className="social-icon linkedin-icon"></div>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;