import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="columns">
          <Layout />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
