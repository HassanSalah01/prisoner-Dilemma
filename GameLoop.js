let arr = [];
let x = 1;
let y = 0;
let xScore = 0;
let yScore = 0;
const TFT = () => {
  x = 1;
  y = Math.floor(Math.random() * 2);
  console.log(`x = ${x}, y = ${y}`);
  for (let i = 0; i < 10; i++) {
    x = y;
    y = Math.floor(Math.random() * 2);
    console.log(`x = ${x}, y = ${y}`);
  }
};
TFT();
