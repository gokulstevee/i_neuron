let array = [3, 45, 6, 7, 23, 5, 7, 8];

function find_largest(_nth) {
  function shortNumber(a, b) {
    return a - b;
  }
  let descending = array.sort(shortNumber).reverse();
  return descending[_nth - 1];
}

console.log(find_largest(3));
