import React from 'react'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import ChordDisplay from './ChordDisplay'

const ChordList = (props) => {
  const { controller, updateState } = props
  const style = {
    padding: '16px',
    margin: '5px',
    borderBottom: '1.5px solid #DDD',
    borderRight: '1.5px solid #DDD'
  }
  const list = controller
        .getChords()
        .map(chord => {
          return (
            <ChordDisplay
            chord={chord}
            key={chord.name}
            updateState={updateState}
            controller={controller}
            style={style}
            />
          )
        });
  return (
    <Card>
      <CardContent>
        <Typography
          variant="headline"
          style={{
            marginRight: '15px'
          }}
        >Chords
        </Typography>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          alignContent: 'space-around',
        }}>
          {list}
        </div>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  )
}

export default ChordList
