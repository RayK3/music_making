import React from 'react'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

const ChordDisplay = (props) => {
  const { chord } = props;

  return (
    <div>
      <Typography variant="title">
        {chord.name}
      </Typography>
      <Button color="secondary">
        Play
      </Button>
    </div>
  )
}

export default ChordDisplay;
