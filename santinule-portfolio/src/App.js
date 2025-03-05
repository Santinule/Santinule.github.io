import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import homeImage from './assets/home_pic.png';
import Navbar from './components/Navbar';

function App() {
  // Page components with better styling
  const Home = () => (
    <div className="content-container">
      <h1 className="main-heading">Santiago Nule</h1>
      <div className="profile-section">
        <div className="profile-image-container">
          {homeImage ? (
            <img 
              src={homeImage} 
              alt="Santiago Nule" 
              className="profile-image"
            />
          ) : (
            <div className="profile-image-placeholder">
              <span>Image placeholder</span>
            </div>
          )}
        </div>
        <div className="profile-bio">
          <p className="bio-text">
            <strong>About me:</strong>
          </p>
          <ul className="bio-list">
            <li>I am a CS masters student at Johns Hopkins currently living in Baltimore, MD</li>
            <li>I was born in Bogota, Colombia and spent my childhood there</li>
            <li>However, I have spent most of my life living in the USA on the East Coast</li>
            <li> I have also lived in the UK, and Italy. I enjoy English breakfast, Premier League; Pizza, e Calcio</li>
            <li>I have two bachelor's degrees: Mathematics and Economics, & Data Science</li>
            <li>Actively working on engineering problems and looking to collaborate on interesting projects</li>
            <li>I enjoy listening to blues, jazz, house, and electronic music</li>
          </ul>
        </div>
      </div>
    </div>
  );
  
  const DataScience = () => (
    <div className="content-container">
      <h1 className="main-heading">Data Science</h1>
      <p>Content coming soon...</p>
    </div>
  );
  
  const MachineLearning = () => (
    <div className="content-container">
      <h1 className="main-heading">Machine Learning</h1>
      <p>Content coming soon...</p>
    </div>
  );
  
  const SoftwareDevelopment = () => (
    <div className="content-container">
      <h1 className="main-heading">Software Development</h1>
      <p>Content coming soon...</p>
    </div>
  );
  
  const Hobbies = () => (
    <div className="content-container">
      <h1 className="main-heading">Hobbies/Interests</h1>
      <p>Content coming soon...</p>
    </div>
  );

  return (
    <Router>
      <div className="app-container">
        {/* Navigation component */}
        <Navbar />

        {/* Main Content Area */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/data-science" element={<DataScience />} />
            <Route path="/machine-learning" element={<MachineLearning />} />
            <Route path="/software-development" element={<SoftwareDevelopment />} />
            <Route path="/hobbies" element={<Hobbies />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;