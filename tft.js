const TFT = (a, b) => {
  a = b;
};

const arr = [];
let x = 1;
let y = 1;
arr.push([x, y]);

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
module.exports = {
  TFT,
  checkWinner,
};
