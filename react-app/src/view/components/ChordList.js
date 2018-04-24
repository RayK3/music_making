import React, {Component, Fragment} from 'react'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import ChordDisplay from './ChordDisplay'

export default class ChordList extends Component {
  constructor(props) {
    super(props)
    this.controller = props.controller;
    var self = this;
    this.state = {
      chords: self.controller.getChords()
    }
    console.log(this.state.chords);
  }
  render() {
    const chords = this.state.chords.map(chord => (
      <ChordDisplay chord={chord} />
    ));
    return (
      <Card>
        <CardContent>
          <Typography color="textSecondary">
            Chords
          </Typography>
          {chords}
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    )
  }
}
