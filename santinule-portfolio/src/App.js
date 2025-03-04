import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import homeImage from './assets/home_pic.png'; // Make sure this path is correct

function App() {
  // Page components with better styling
  const Home = () => (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Santiago Nule</h1>
      <div className="flex flex-col md:flex-row items-start mb-8 justify-start">
        <div className="mb-4 md:mb-0">
          {homeImage ? (
            <img 
              src={homeImage} 
              alt="Santinule" 
              className="rounded-lg shadow-lg max-w-full h-auto"
              style={{ maxWidth: '250px' }}
            />
          ) : (
            <div className="bg-gray-700 rounded-lg shadow-lg" style={{ width: '250px', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span>Image placeholder</span>
            </div>
          )}
        </div>
        <div className="md:pl-6 text-left" style={{ marginTop: '30px' }}>
          <p className="mb-2 text-left">
            Hi, I'm Santinule. <br />
            I'm passionate about data science, machine learning, and software development.
          </p>
          <p className="text-left">
            This portfolio showcases my projects and interests in these areas.
          </p>
        </div>
      </div>
    </div>
  );
  
  const DataScience = () => <div className="text-white">Data Science Page</div>;
  const MachineLearning = () => <div className="text-white">Machine Learning Page</div>;
  const SoftwareDevelopment = () => <div className="text-white">Software Development Page</div>;
  const Hobbies = () => <div className="text-white">Hobbies/Interests</div>;

  return (
    <Router>
      <div className="flex flex-col md:flex-row min-h-screen" style={{ backgroundColor: '#536878' }}>
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 bg-gray-900 p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">Table of Contents</h2>
          <nav>
            <ul className="space-y-4">
              <li><Link to="/" className="text-white hover:text-gray-300 block py-2 px-4 rounded hover:bg-gray-800 transition-colors">Home</Link></li>
              <li><Link to="/data-science" className="text-white hover:text-gray-300 block py-2 px-4 rounded hover:bg-gray-800 transition-colors">Data Science</Link></li>
              <li><Link to="/machine-learning" className="text-white hover:text-gray-300 block py-2 px-4 rounded hover:bg-gray-800 transition-colors">Machine Learning</Link></li>
              <li><Link to="/software-development" className="text-white hover:text-gray-300 block py-2 px-4 rounded hover:bg-gray-800 transition-colors">Software Development</Link></li>
              <li><Link to="/hobbies" className="text-white hover:text-gray-300 block py-2 px-4 rounded hover:bg-gray-800 transition-colors">Hobbies/Interests</Link></li>
            </ul>
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="ml-0 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/data-science" element={<DataScience />} />
              <Route path="/machine-learning" element={<MachineLearning />} />
              <Route path="/software-development" element={<SoftwareDevelopment />} />
              <Route path="/hobbies" element={<Hobbies />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;