const mSize = require('./mSize');
const mTranspose = (arr) => {
  const { row, col } = mSize(arr);
  const nwArr = [];
  for (let r = 0; r < col; r++) {
    nwArr.push([]);
    for (let c = 0; c < row; c++) {
      nwArr[r].push(arr[c][r]);
    }
  }
  return nwArr;
};
module.exports = mTranspose;
