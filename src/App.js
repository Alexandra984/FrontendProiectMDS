import React, { Component } from 'react';
import './App.css';
import WelcomeTest from './containers/WelcomeTest';
import Layout from './components/Layout';
import ManeleSection from './containers/ManeleSection';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
        <WelcomeTest />
        <ManeleSection />
        </Layout>
      </div>
    );
  }
}

export default App;
