// 1 - 6;
// 2 - 11;
// 3 - 16;
// 4 - 21;

const prompt = require("prompt-sync")();
const step = prompt("Enter number of steps ");

function matchStick(_step) {
  if (_step >= 1) {
    let numOfMatchStick = 5 * step;
    return numOfMatchStick + 1;
  }
}

console.log(matchStick(step));
