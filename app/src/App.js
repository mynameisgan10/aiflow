import React, { Component } from 'react';
import Dashboard from './dashboard/dashboard';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="columns">
          <Dashboard />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
