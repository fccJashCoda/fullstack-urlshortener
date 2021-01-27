class Keygen {
  _getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  _getRandomUpper() {
    const code = this._getRandomInt(91, 65);
    return String.fromCharCode(code);
  }
  _getRandomLower() {
    const code = this._getRandomInt(123, 97);
    return String.fromCharCode(code);
  }

  generateId() {
    let id = '';

    for (let i = 0; i < 8; i++) {
      if (Math.random() < 0.33) {
        id += this._getRandomInt(10);
      } else if (Math.random() < 0.66) {
        id += this._getRandomLower();
      } else {
        id += this._getRandomUpper();
      }
    }
    return id;
  }
}

module.exports = Keygen;
