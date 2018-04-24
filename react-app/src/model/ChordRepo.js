import Chord from './Chord';

export default class ChordRepo {
  constructor() {
    this.chords = [
      new Chord('F7', ['F4', 'A4', 'C5', 'Eb5'], 'short'),
      new Chord('Bb', ['Bb3', 'D4', 'F4'], 'medium'),
      new Chord('Eb', ['Eb4', 'G4', 'Bb4', 'Eb5'], 'short')
    ];
  }

  addChord(name, notes, length) {
    if(length !== 'short' || length !== 'medium' || length !== 'long') {
      console.log('Please pick either "short", "medium", or "long"');
      return;
    }
    this.chords.forEach(chord => {
      chord.notes.forEach((note, index, chord) => {
        if(note !== notes[index] && chord.name !==  name) {
          this.chords.push(new Chord(name, notes, length));
          return;
        }
      })
    });

    console.log('That chord voicing already exists. Maybe you should rename');
  }

  removeChordByName(name) {
    if(!this.chords.find(chord => chord.name === name)) {
      console.log('That chord doesn\'t exist');
    } else {
      this.chords.filter(chord => chord.name !== name);
    }
  }

  play(name) {
    var chord = this.chords.filter(chord => chord.name === name);
    chord.play();
  }

  rename(oldName, newName) {
    var chord = this.chords.filter(chord => chord.name === oldName);
    chord.rename(newName);
  }

  revoice(name, notes) {
    var chord = this.chords.filter(chord => chord.name === name);
    chord.revoice(notes);
  }

  getChords() {
    return this.chords.map(chord => chord);
  }
}
