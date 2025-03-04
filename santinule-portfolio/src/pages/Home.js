import React from 'react';
import homeImage from '../assets/home_pic.png';

function Home() {
  return (
    <div className="content-container">
      <h1 className="main-heading">Santiago Nule</h1>
      <div className="profile-section">
        <div className="profile-image-container">
          <img 
            src={homeImage} 
            alt="Santiago Nule" 
            className="profile-image"
          />
        </div>
        <div className="profile-bio">
          <p className="bio-text">
            <strong>About me:</strong>
          </p>
          <ul className="bio-list">
            <li>I am a CS masters student at Johns Hopkins currently living in Baltimore, MD</li>
            <li>I was born in Bogota, Colombia and spent my childhood there</li>
            <li>However, I have spent most of my life living in the USA on the East Coast</li>
            <li> I have also lived in the UK and Italy. I love English breakfast, Premier League, Pizza e Calcio</li>
            <li>I have two bachelor's degrees: Mathematics and Economics, & Data Science</li>
            <li>Actively working on engineering problems and looking to collaborate on interesting projects</li>
            <li>I enjoy listening to blues, jazz, house, and electronic music</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;