import React, { Component } from 'react'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export default class Add extends Component {
  constructor(props) {
    super(props)
    this.updateState = props.updateState
    this.controller = props.controller

    this.state = {
      name: '',
      notes: '',
      length: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleNoteChange = this.handleNoteChange.bind(this)
    this.handleLengthChange = this.handleLengthChange.bind(this)
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value,
    })
  }

  handleNoteChange(event) {
    this.setState({notes: event.target.value})
  }

  handleLengthChange(event) {
    this.setState({length: event.target.value})
  }

  handleSubmit(event) {
    if(!this.state.name || !this.state.notes || !this.state.length) {
      event.preventDefault()
      return
    } else if(['short', 'medium', 'long'].indexOf(this.state.length) < 0) {
      event.preventDefault()
      return
    } else {
      this.controller.addChord(
        this.state.name,
        this.state.notes.split(" "),
        this.state.length,
      )
      this.updateState()
      event.preventDefault()
    }
  }

  render() {
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="title">Add a Chord</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <form onSubmit={this.handleSubmit}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'baseline'
            }}>
              <div id="addName">
                <TextField
                  id="name"
                  label="Name"
                  className="addChord"
                  onChange={this.handleNameChange}
                >
                </TextField>
              </div>
              <div id="addNotes">
                <TextField
                  id="notes"
                  label="Notes"
                  className="addChord"
                  helperText="Octave designation notation, i.e. A4. Separated by spaces"
                  onChange={this.handleNoteChange}
                >
                </TextField>
              </div>
              <div id="addLength">
                <TextField
                  id="length"
                  label="Length"
                  className="addChord"
                  helperText="Can be short, medium, or long."
                  onChange={this.handleLengthChange}
                >
                </TextField>
                <input type="submit" value="Add" />
              </div>
            </div>
          </form>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}
