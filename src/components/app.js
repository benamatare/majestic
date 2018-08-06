import React, { Component } from 'react';

import '../css/components/app.css';

import Frame from './frame.js';
import NoFrame from './noframe.js';
import Footer from './footer.js';

export default class App extends Component {
  state = {
    first_load: false
  };

  onClick = () => { 
    this.setState({ 
      first_load: true 
    });
  };

  render() {
    return (
      <div className="majestic">
        <div className="majestic-frame-container">
        { this.state.first_load ? <Frame /> : <NoFrame onClick={this.onClick} /> }
        </div>
        <Footer />
      </div>
    );
  };
};

