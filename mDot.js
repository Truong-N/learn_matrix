const mMultiply = require('./multiply2Matrixes');
const mSize = require('./mSize');
const mTranspose = require('./mTranspose');

const mDot = (m1, m2) => {
  const s1 = mSize(m1);
  const s2 = mSize(m2);
  if (s1.row === s2.row && s1.col === s2.col) {
    const m1T = mTranspose(m1);
    const nwArr = mMultiply(m1T, m2);

    let sum = 0;
    for (let r = 0; r < nwArr.length; r++) {
      for (let c = 0; c < nwArr[0].length; c++) {
        sum += nwArr[r][c];
      }
    }
    return sum;
  }
};
module.exports = mDot;
