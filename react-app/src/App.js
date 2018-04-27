import React, { Component } from 'react'
import { ChordRepo } from './model'
import Controller from './controller/Controller'
import ChordList from './view/components/ChordList'
import Add from './view/components/Add'
import Arrange from './view/components/Arrange'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.repo = new ChordRepo()
    this.controller = new Controller(this.repo)
    var self = this
    this.state = {
      chords: self.repo.getChords()
    }

    this.updateState = this.updateState.bind(this)
  }

  updateState() {
    this.setState({
      chords: this.controller.getChords()
    })
  }

  render() {
    return (
      <div className="App">
        <ChordList
          controller={this.controller}
          updateState={this.updateState}
        />
        <Add
          controller={this.controller}
          updateState={this.updateState}
        />
        <Arrange
          controller={this.controller}
        />
      </div>
    );
  }
}

export default App;
