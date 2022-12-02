// selection Sort

function selectionSort(arr) {
  // let len = arr.length;
  for (let i = 0; i < arr.length; i += 1) {
    let min = i;
    for (let j = i + 1; j < arr.length; j += 1) {
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

module.exports = selectionSort;
