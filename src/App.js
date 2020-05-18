import React, { Component } from 'react';
import './App.css';
// import WelcomeTest from './containers/WelcomeTest';
import Layout from './components/Layout';
import ManeleSection from './containers/ManeleSection';
import WelcomeTest from './containers/WelcomeTest';
import Backdrop from './components/Backdrop'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Backdrop show={true} />
          <WelcomeTest />
          <ManeleSection />
        </Layout>
      </div>
    );
  }
}

export default App;
