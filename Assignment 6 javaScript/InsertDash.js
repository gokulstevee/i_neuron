/*

if 2 and 3 % 2 == 0 than             2 - 3 

if 2 is % 2 == 0 but 3 is % 2 != 0   23-4

*/
function computDash(_num) {
  _num.toString();
  let num = _num.toString().split("");
  for (i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0 && num[i + 1] % 2 == 0) {
      num.splice(i + 1, 0, "-");
      continue;
    }
  }

  return num;
}

let n = computDash(23468);
console.log(n); //254-6-8
