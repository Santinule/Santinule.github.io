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
            <Link to="/data-science" className="nav-link">Data Science</Link>
            <Link to="/machine-learning" className="nav-link">Machine Learning</Link>
            <Link to="/software-development" className="nav-link">Software Development</Link>
            <Link to="/hobbies" className="nav-link">Hobbies/Interests</Link>
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
              href="https://linkedin.com/in/Santiagonule" 
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
          <div className="mobile-nav-title">Santiago Nule</div>
          <button className="mobile-menu-button" onClick={toggleMenu}>
            ☰
          </button>
        </div>
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <nav className="mobile-nav-links">
            <Link to="/" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/data-science" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Data Science</Link>
            <Link to="/machine-learning" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Machine Learning</Link>
            <Link to="/software-development" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Software Development</Link>
            <Link to="/hobbies" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Hobbies/Interests</Link>
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
              href="https://linkedin.com/in/Santiagonule" 
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