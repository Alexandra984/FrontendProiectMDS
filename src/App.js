import React, { Component } from 'react';
import './App.css';
// import WelcomeTest from './containers/WelcomeTest';
import { connect } from 'react-redux';
import Layout from './components/Layout';
import ManeleSection from './containers/ManeleSection';
import WelcomeTest from './containers/WelcomeTest';
import Backdrop from './components/Backdrop'

const mapStateToProps = state => {
  return {
      isClickedToExit: state.ExitTest.isClicked
  }
}


class App extends Component {
  render() {
    console.log(this.props.isClickedToExit)
    const show=this.props.isClickedToExit
    return (
      <div className="App">
        <Layout>
          <Backdrop show={show} />
          <WelcomeTest />
          <ManeleSection />
        </Layout>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
