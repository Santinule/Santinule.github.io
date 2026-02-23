import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ReadingList from './pages/ReadingList';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ClickSpark from './components/ClickSpark';

function App() {
  return (
    <Router>
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className="app-container">
          {/* Navigation component */}
          <Navbar />

          {/* Main Content Area */}
          <div className="main-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/projects" component={Projects} />
              <Route path="/reading-list" component={ReadingList} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
      </ClickSpark>
    </Router>
  );
}

export default App;