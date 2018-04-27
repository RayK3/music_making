export default class Controller {
  constructor(repo) {
    this.repo = repo
  }

  addChord(name, notes, length) {
    this.repo.addChord(name, notes, length)
  }

  removeChord(name) {
    this.repo.removeChordByName(name)
  }

  play(name) {
    this.repo.play(name)
  }

  checkValidName(name) {
    return this.repo.checkValidName(name)
  }

  rename(oldName, newName) {
    this.repo.rename(oldName, newName)
  }

  revoice(name, notes) {
    this.repo.revoice(name, notes)
  }

  newLength(name, newLength) {
    this.repo.newLength(name, newLength)
  }

  getChordByName(name) {
    return this.repo.getChordByName(name)
  }

  getChords() {
    return this.repo.getChords()
  }
}
