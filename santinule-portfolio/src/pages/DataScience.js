import React from 'react';

function DataScience() {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-6">Data Science Projects</h1>
      <div className="space-y-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-3">Project 1</h2>
          <p className="mb-4">Description of your data science project goes here.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-400 hover:text-blue-300">View Project</a>
            <a href="#" className="text-blue-400 hover:text-blue-300">GitHub</a>
          </div>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-3">Project 2</h2>
          <p className="mb-4">Description of your data science project goes here.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-400 hover:text-blue-300">View Project</a>
            <a href="#" className="text-blue-400 hover:text-blue-300">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataScience;