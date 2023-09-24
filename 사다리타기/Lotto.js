class Lotto {
  constructor(repeat) {
    this.repeat = repeat;
  }
  makeNumberRandom() {
    const HIGHEST_NUMBER = 50;
    return Math.ceil(Math.random() * HIGHEST_NUMBER);
  }
  validateUnique() {}
  setLottoNumberAll() {
    let arr = [];
    while (this.repeat > 0) {
      const savedNumber = this.makeNumberRandom();
      if (!arr.includes(savedNumber)) {
        continue;
      }
      arr.push(savedNumber);
      this.repeat--;
    }
    return arr;
  }
}

export default Lotto;
