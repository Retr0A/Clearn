import React from 'react'
import '../Scss/App.scss'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'

import Home from './Pages/Home.jsx'
import About from './Pages/About'
import Learn from './Pages/Learn'

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Navbar />
          <div className="current-page">
            <Switch className="navbar-switch">
              <Route path='/' exact component={Home} />
              <Route path='/about' exact component={About} />
              <Route path='/learn' exact component={Learn} />
            </Switch>
          </div>
        </Router>
      </>
    </div>
  );
}

export default App;
