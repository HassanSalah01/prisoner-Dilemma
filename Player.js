class Player {
  constructor(x = null, algo) {
    if (algo == "TFTT") {
      this.answer = 1;
    }
    this.score = 0;
    this.answers = [];
    if (x == null) {
      this.answer = this.rand();
    } else {
      this.answer = x;
    }
  }
  rand() {
    return Math.floor(Math.random() * 2);
  }
  checkWinner = (opponent) => {
    this.playingHistory();
    opponent.playingHistory();
    if (this.answer > opponent.answer) {
      opponent.score += 5;
    } else if (this.answer < opponent.answer) {
      this.score += 5;
    } else if (this.answer == opponent.answer && this.answer != 0) {
      this.score = opponent.score += 3;
    } else {
      this.score = opponent.score += 1;
    }
  };
  playingHistory() {
    this.answers.push(this.answer);
  }
  setAnswer(answer) {
    this.answer = answer;
  }
  getScore() {
    return this.score;
  }
  getAnswers() {
    return this.answers;
  }
}
module.exports = {
  Player,
};
