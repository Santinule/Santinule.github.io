import React from 'react';

function DataScience() {
  return (
    <div className="content-container">
      <h1 className="main-heading">Data Science Projects</h1>
      
      <div className="project-item">
        <h2 className="project-title">Data Analysis Project</h2>
        <p className="project-description">
          This project involved analyzing large datasets to extract meaningful insights 
          and develop predictive models. Used techniques such as regression analysis, 
          classification, and clustering.
        </p>
        <div className="project-links">
          <a href="#" className="project-link">View Project</a>
          <a href="#" className="project-link">GitHub Repository</a>
        </div>
      </div>
      
      <div className="project-item">
        <h2 className="project-title">Visualization Dashboard</h2>
        <p className="project-description">
          Created an interactive dashboard to visualize complex data trends and patterns.
          Implemented using modern visualization libraries and techniques for data exploration.
        </p>
        <div className="project-links">
          <a href="#" className="project-link">View Project</a>
          <a href="#" className="project-link">GitHub Repository</a>
        </div>
      </div>
      
      {/* Add more projects as needed */}
    </div>
  );
}

export default DataScience;