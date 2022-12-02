const { performance } = require("perf_hooks");

const bubbleSort = require("../sort/bubbleSort");
const insertionSort = require("../sort/insertionSort");
const selectionSort = require("../sort/selectionSort");
const selectionSort2 = require("../sort/selectionSort2");
const quickSort = require("../sort/quickSort");

const makeArr = require("./makeArr");

const targetArr = makeArr(100000);

function measureSort(sortFnc) {
  const start = performance.now();
  const arr = sortFnc(targetArr);
  const end = performance.now();

  const elapseTime = `${sortFnc.name}: ${(end - start) / 1000} seconds.`;

  return { elapseTime, arr };
}

function isSorted(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function testSort() {
  // [bubbleSort, insertionSort, selectionSort, quickSort].forEach(sortFnc => {
  [selectionSort, selectionSort2].forEach(sortFnc => {
    const { elapseTime, arr } = measureSort(sortFnc);
    console.log(elapseTime);

    if (isSorted(arr) === false) {
      console.log(`${sortFnc.name} Sort failed!`);
    }
  });
}

testSort();

module.exports = measureSort;
