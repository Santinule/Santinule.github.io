import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/reading-list" component={ReadingList} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;