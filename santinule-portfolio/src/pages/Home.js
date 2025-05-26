import React from 'react';
import homeImage from '../assets/home_pic.png';

function Home() {
  return (
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
          <h2 className="bio-heading">About me:</h2>
          <ul className="bio-list">
            <li>I am a CS masters student at Johns Hopkins currently living in Baltimore, MD</li>
            <li>I was born in Colombia, and spent most of my childhood there. 
              However, I have spent most of my life living on the East Coast. I have also lived in the UK and Italy</li>
            <li>I have two bachelors: Mathematics and Economics, & Data Science</li>
            <li>My philosophical interpretation of reality centers on predicate dualism—which I see as more fundamental than but complementary to property dualism's distinction between mental and physical properties</li>
          </ul>
          
          <h2 className="bio-heading">My interests:</h2>
          <ul className="bio-list">
            <li>Science, mainly through statistical analysis</li>
            <li>Programming: building software as well as building software through data</li>
            <li>Art, specially in the form of fashion, styling, and architecture. Music is the queen of the arts, I enjoy listening to blues,
               jazz, house, and electronic music</li>
            <li>Meeting people with diverse frameworks of thinking</li>
            <li>Reading, non-fiction mainly. Check out my reading list</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;