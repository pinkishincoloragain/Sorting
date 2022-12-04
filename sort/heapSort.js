// heap sort

function heapSort(arr) {
  let len = arr.length;
  let end = len - 1;
  heapify(arr, len);
  while (end > 0) {
    [arr[0], arr[end]] = [arr[end], arr[0]];
    siftDown(arr, 0, end);
    end -= 1;
  }
  return arr;
}

function heapify(arr, len) {
  let start = Math.floor(len / 2) - 1;
  while (start >= 0) {
    siftDown(arr, start, len);
    start -= 1;
  }
}

function siftDown(arr, start, end) {
  let root = start;
  while (root * 2 + 1 < end) {
    let child = root * 2 + 1;
    if (child + 1 < end && arr[child] < arr[child + 1]) {
      child += 1;
    }
    if (arr[root] < arr[child]) {
      [arr[root], arr[child]] = [arr[child], arr[root]];
      root = child;
    } else {
      return;
    }
  }
}

module.exports = heapSort;
