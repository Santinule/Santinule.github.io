import React from 'react';
import homeImage from './assets/home_pic.png';

function Home() {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Portfolio</h1>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <img 
            src={homeImage} 
            alt="Santinule" 
            className="rounded-lg shadow-lg max-w-full h-auto"
            style={{ maxWidth: '250px' }}
          />
        </div>
        <div className="md:w-2/3 md:pl-6">
          <p className="mb-4">Hi, I'm Santinule. I'm passionate about data science, machine learning, and software development.</p>
          <p>This portfolio showcases my projects and interests in these areas.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;