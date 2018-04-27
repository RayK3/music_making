import React, { Component } from 'react'
import Button from 'material-ui/Button'
import List, { ListItem } from 'material-ui/List'
import Dialog, { DialogTitle } from 'material-ui/Dialog'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'

class ModifyDialog extends Component {
  constructor(props) {
    super(props)
    this.updateState = props.updateState
    this.controller = props.controller
    this.chord = props.chord
    this.open = props.open
    this.state = {
      newName: props.chord.name,
      newVoicing: props.chord.notes.join(" "),
      newLength: props.chord.lengthStr,
      remove: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNewName = this.handleNewName.bind(this)
    this.handleNewVoicing = this.handleNewVoicing.bind(this)
    this.handleNewLength = this.handleNewLength.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleClose = () => {
    this.props.handleClose()
  }

  handleSubmit(event) {
    if(this.state.remove) {
      this.controller.removeChord(this.chord.name)
      event.preventDefault()
      this.updateState()
      this.handleClose()
      return
    }

    if(this.state.newName !== this.chord.name) {
      if(this.controller.checkValidName(this.state.newName)) {
        this.controller.rename(this.chord.name, this.state.newName)
      } else {
        console.log('That name is already taken')
      }
    }

    if(this.state.newVoicing) {
      this.controller.revoice(this.chord.name, this.state.newVoicing.split(" "))
    }
    if(this.state.newLength) {
      this.controller.newLength(this.chord.name, this.state.newLength)
    }
    event.preventDefault()
    this.updateState()
    this.handleClose()
  }

  handleNewName(event) {
    this.setState({
      newName: event.target.value
    })
  }

  handleNewVoicing(event) {
    this.setState({
      newVoicing: event.target.value
    })
  }

  handleNewLength(event) {
    this.setState({
      newLength: event.target.value
    })
  }

  handleCheck(event) {
    this.setState({
      remove: event.target.checked
    })
  }



  render() {
    const { open } = this.props

    return (
      <Dialog onClose={this.handleClose} open={open}>
        <DialogTitle id="Modify Title">Modify a Chord</DialogTitle>
        <form onSubmit={this.handleSubmit}>
          <List>
            <ListItem>
              <div>
                <Typography variant="subheading">
                  Change Name
                </Typography>
                <TextField
                  id="newName"
                  onChange={this.handleNewName}
                  value={this.state.newName}
                >
                </TextField>
              </div>
            </ListItem>
            <ListItem>
              <div>
                <Typography variant="subheading">
                  Change Voicing
                </Typography>

                <TextField
                  id="newVoicing"
                  onChange={this.handleNewVoicing}
                  helperText="List all the Notes"
                  value={this.state.newVoicing}
                >
                </TextField>
              </div>
            </ListItem>
            <ListItem>
              <div>
                <Typography variant="subheading">
                  Change Length
                </Typography>

                <TextField
                  id="newLength"
                  onChange={this.handleNewLength}
                  helperText="short, medium or long"
                  value={this.state.newLength}
                >
                </TextField>
              </div>
            </ListItem>
            <ListItem>
              <Typography variant="subheading">
                Remove?
              </Typography>
              <Checkbox
                checked={this.state.remove}
                onChange={this.handleCheck}
                color="secondary"
              />
            </ListItem>
          </List>
          <Button color="secondary" type="submit">Submit</Button>
        </form>
      </Dialog>
    )
  }
}

class ModifyContainer extends Component {
  constructor(props) {
    super(props)
    this.updateState = props.updateState
    this.controller = props.controller
    this.state = {
      open: false,
      selectedValue: '',
    }
  }

  handleClickOpen = () => {
    console.log('opening')
    this.setState({
      open: true,
    })
  }

  handleClose = value => {
    this.setState({ open: false })
  }

  render() {
    const { chord } = this.props
    return (
      <div>
        <Button size="small" onClick={this.handleClickOpen}>Modify</Button>
        <ModifyDialog
          open={this.state.open}
          handleClose={this.handleClose}
          updateState={this.updateState}
          controller={this.controller}
          chord={chord}
        />
      </div>
    )
  }
}
export default ModifyContainer
