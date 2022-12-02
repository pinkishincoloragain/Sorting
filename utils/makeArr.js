const makeArr = size =>
  Array(size)
    .fill()
    .map(x => Math.floor(Math.random() * size));

module.exports = makeArr;
