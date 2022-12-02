// insertion sort

function insertionSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i += 1) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j -= 1;
    }
  }
  return arr;
}

module.exports = insertionSort;
