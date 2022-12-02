const { performance } = require("perf_hooks");

const bubbleSort = require("../sort/bubbleSort");
const insertionSort = require("../sort/insertionSort");
const selectionSort = require("../sort/selectionSort");
const selectionSort2 = require("../sort/selectionSort2");
const quickSort = require("../sort/quickSort");

const makeArr = require("./makeArr");

const baseArr = makeArr(10000);
const sortAlgorithms = [bubbleSort, insertionSort, selectionSort, selectionSort2, quickSort];
// const targetSortAlgorithm = [selectionSort, selectionSort2];

const generateSameArr = () => [...baseArr];

function measureSort(sortFnc, target) {
  const start = performance.now();
  const sortedArr = sortFnc(target);
  const end = performance.now();

  const timePhrase = `${sortFnc.name}: ${(end - start) / 1000} seconds.`;

  return { timePhrase, sortedArr };
}

function measureSortWithDate(sortFnc, target) {
  const dateStart = new Date();
  const sortedArr = sortFnc(target);
  const dateEnd = new Date();

  const timePhrase = `${sortFnc.name}: ${
    (dateEnd.getTime() - dateStart.getTime()) / 1000
  } seconds.`;

  return { timePhrase, sortedArr };
}

function checkSorted(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function testSort(targetSortAlgorithm = sortAlgorithms) {
  targetSortAlgorithm.forEach(sortFnc => {
    const targetArr = generateSameArr();
    const { timePhrase, sortedArr } = measureSort(sortFnc, targetArr);

    if (checkSorted(sortedArr) === false) {
      console.log(`${sortFnc.name} Sort failed!`);
    }

    console.log(timePhrase);
  });
}

testSort();

module.exports = measureSort;
