import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ReadingList from './pages/ReadingList';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation component */}
        <Navbar />

        {/* Main Content Area */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reading-list" element={<ReadingList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;