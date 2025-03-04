import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="w-64 bg-gray-900 p-6">
      <h2 className="text-2xl font-bold mb-8 text-center text-white">Santinule</h2>
      <nav>
        <ul className="space-y-4">
          <li><Link to="/" className="text-white hover:text-gray-300 block">Home</Link></li>
          <li><Link to="/data-science" className="text-white hover:text-gray-300 block">Data Science</Link></li>
          <li><Link to="/machine-learning" className="text-white hover:text-gray-300 block">Machine Learning</Link></li>
          <li><Link to="/software-development" className="text-white hover:text-gray-300 block">Software Development</Link></li>
          <li><Link to="/hobbies" className="text-white hover:text-gray-300 block">Hobbies/Interests</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;