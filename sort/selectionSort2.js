// selection Sort

function selectionSort2(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i += 1) {
    let min = i;
    for (let j = i + 1; j < len; j += 1) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

module.exports = selectionSort2;
