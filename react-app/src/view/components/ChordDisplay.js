import React from 'react'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Modify from './Modify'

const ChordDisplay = (props) => {
  const { chord, updateState, controller, style } = props;
  function handlePlay() {
    controller.play(chord.name);
  }
  return (
    <div style={style}>
      <Typography variant="title">
        {chord.name}
      </Typography>
      <Typography variant="caption">
        {chord.notes.join(" ")}
      </Typography>
      <Typography variant="caption">
        {chord.lengthStr}
      </Typography>
      <Button
        color="primary"
        onClick={handlePlay}
      >Play
      </Button>
      <Modify
        updateState={updateState}
        controller={controller}
        chord={chord}
      />
    </div>
  )
}

export default ChordDisplay;
