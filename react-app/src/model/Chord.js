import guidGen from './guidGen';
import Tone from 'tone';

export default class Chord {
  constructor(name, notes, length) {
    this.name = name;
    this.notes = notes;
    if(length === 'short') {
      this.length = '4n';
    } else if(length === 'medium') {
      this.length = '2n';
    } else if(length === 'long') {
      this.length = '1m';
    }
    this.guid = guidGen();
    this.synth = new Tone.PolySynth(notes.length, Tone.Synth).toMaster();
  }

  rename(name) {
    this.name = name;
  }

  revoice(notes) {
    this.notes = notes;
  }

  newLength(length) {
    if(length === 'short') {
      this.length = '4n';
    } else if(length === 'medium') {
      this.length = '2n';
    } else if(length === 'long') {
      this.length = '1m';
    }
  }

  getNotes() {
    return this.notes;
  }

  getName() {
    return this.name;
  }

  play() {
    this.synth.triggerAttackRelease(this.notes, '1m');
  }
}
