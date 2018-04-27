import React, { Component } from 'react'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import Tone from 'tone'

const MAX_CHORD_SIZE = 10

export default class Arrange extends Component {
  constructor(props) {
    super(props)
    this.controller = props.controller
    this.synth = new Tone.PolySynth(MAX_CHORD_SIZE, Tone.Synth).toMaster()
    this.state = {
      arrangement: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  makeArrangement(chordString) {
    if(Tone.Transport.state === 'started') {
      Tone.Transport.stop()
      Tone.Transport.cancel()
    }

    let chordNames = chordString.split(" ")
    var chords = chordNames.map(name => {
      let chord = this.controller.getChordByName(name)
      if(!chord) return {}
      return {
        notes: chord.notes,
        length: chord.length
      }
    })

    let totalTime = 0;
    var self = this
    chords.forEach((chord, index, array) => {
      Tone.Transport.schedule(function(time) {
        self.synth.triggerAttackRelease(chord.notes, chord.length, time)
      }, totalTime)
      totalTime += chord.length
    })

    Tone.Transport.start()
  }

  handleChange(event) {
    this.setState({
      arrangement: event.target.value,
    })
  }

  handleSubmit(event) {
    if(!this.state.arrangement) {
      console.log('There is no arrangement')
      event.preventDefault()
      return
    } else {
      this.makeArrangement(this.state.arrangement)
      event.preventDefault()
    }
  }

  render() {
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="title">Make an Arrangement</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <form onSubmit={this.handleSubmit}>
            <div>
              <div id="arrangeChords">
                <TextField
                  id="arrangement"
                  label="Arrangement"
                  helperText="Write out the chords in whatever order you want, separated by spaces"
                  onChange={this.handleChange}
                >
                </TextField>
                <input type="submit" value="Arrange" />
              </div>
            </div>
          </form>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}
