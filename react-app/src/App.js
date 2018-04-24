import React, { Component } from 'react'
import { ChordRepo } from './model'
import ChordList from './view/components/ChordList'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.repo = new ChordRepo();
  }
  render() {
    return (
      <div className="App">
        <ChordList controller={this.repo} />
      </div>
    );
  }
}

export default App;
