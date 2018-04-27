import Chord from './Chord';

export default class ChordRepo {
  constructor() {
    this.chords = [
      // new Chord('F7', ['F4', 'A4', 'C5', 'Eb5'], 'short'),
      // new Chord('Bb', ['Bb3', 'D4', 'F4'], 'medium'),
      // new Chord('Eb', ['Eb4', 'G4', 'Bb4', 'Eb5'], 'long'),
      // new Chord('Eb7', ['Eb4', 'G4', 'Bb4', 'Db5'], 'short'),
      // new Chord('Bb7', ['Bb3', 'D4', 'F4', 'Ab4'], 'medium'),
      // new Chord('Bb6', ['Bb3', 'D4', 'F4', 'G4'], 'long')
    ];
    this.getChordByName = this.getChordByName.bind(this)
  }

  addChord(name, notes, length) {
    this.chords.push(new Chord(name, notes, length));
  }

  removeChordByName(name) {
    if(!this.chords.find(chord => chord.name === name)) {
      console.log('That chord doesn\'t exist');
    } else {
      this.chords = this.chords.filter(chord => chord.name !== name);
    }
  }

  play(name) {
    var chord = this.chords.filter(chord => chord.name === name)[0];
    chord.play();
  }

  checkValidName(name) {
    return this.chords.filter(chord => chord.name === name).length === 0
  }

  rename(oldName, newName) {
    var chord = this.chords.filter(chord => chord.name === oldName)[0];
    chord.rename(newName);
  }

  revoice(name, notes) {
    var chord = this.chords.filter(chord => chord.name === name)[0]
    chord.revoice(notes);
  }

  newLength(name, newLength) {
    var chord = this.chords.filter(chord => chord.name === name)[0]
    chord.newLength(newLength)
  }

  getChordByName(name) {
    var chord = this.chords.filter(chord => chord.name === name)[0]
    return chord
  }

  getChords() {
    return this.chords.map(chord => chord);
  }
}
