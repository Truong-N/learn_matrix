const logMatrix = require('./logMatrix');
const mSize = require('./mSize');
const mMultiply = (m1, m2) => {
  const s1 = mSize(m1);
  const s2 = mSize(m2);
  logMatrix(m1);
  logMatrix(m2);
  if (s1.col === s2.row) {
    const nwArr = [];
    for (let r = 0; r < s1.row; r++) {
      const row = [];
      for (let c = 0; c < s2.col; c++) {
        let sum = 0;
        for (let c2 = 0; c2 < s1.col; c2++) {
          sum += m1[r][c2] * m2[c2][c];
        }
        row.push(sum);
      }
      nwArr.push(row);
    }
    logMatrix(nwArr);
    return nwArr;
  }
};
module.exports = mMultiply;
