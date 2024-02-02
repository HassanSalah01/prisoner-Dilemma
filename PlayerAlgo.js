const { Player } = require("./Player");

class PlayerAlgo extends Player {
  constructor(x, algo) {
    super(x);
    this.algoUsed = algo;
  }
  TFTT(p2) {
    if (this.answer > p2.answer) {
      p2.score += 5;
    } else if (this.answer < p2.answer) {
      this.score += 5;
    } else if (this.answer == p2.answer && this.answer != 0) {
      this.score = p2.score += 3;
    } else {
      this.score = p2.score += 1;
    }
  }
}
module.exports = {
  PlayerAlgo,
};
