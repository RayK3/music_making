import guidGen from './guidGen';
import Tone from 'tone';

export default class Chord {
  constructor(name, notes, length) {
    this.name = name;
    this.notes = notes;
    this.lengthStr = length;
    if(length === 'short') {
      this.length = 0.5;
    } else if(length === 'medium') {
      this.length = 1;
    } else if(length === 'long') {
      this.length = 2;
    }
    this.guid = guidGen();
    this.synth = new Tone.PolySynth(notes.length, Tone.Synth).toMaster()
  }

  rename(name) {
    this.name = name;
  }

  revoice(notes) {
    this.notes = notes;
    this.synth = new Tone.PolySynth(notes.length, Tone.Synth).toMaster();
  }

  newLength(lengthStr) {
    this.lengthStr = lengthStr
    if(lengthStr === 'short') {
      this.length = 0.5;
    } else if(lengthStr === 'medium') {
      this.length = 1;
    } else if(lengthStr === 'long') {
      this.length = 2;
    }
  }

  getNotes() {
    return this.notes;
  }

  getName() {
    return this.name;
  }

  play() {
    this.synth.triggerAttackRelease(this.notes, this.length);
  }
}
