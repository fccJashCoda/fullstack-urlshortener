class ShortUrl {
  getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  getRandomUpper() {
    const code = this.getRandomInt(91, 65);
    return String.fromCharCode(code);
  }
  getRandomLower() {
    const code = this.getRandomInt(123, 97);
    return String.fromCharCode(code);
  }

  generateId() {
    let id = '';
    let char = '';

    for (let i = 0; i < 8; i++) {
      if (Math.random() < 0.33) {
        char = this.getRandomInt(10);
      } else if (Math.random() < 0.66) {
        char = this.getRandomLower();
      } else {
        char = this.getRandomUpper();
      }
      id += char;
    }
    return id;
  }
}

module.exports = ShortUrl;
