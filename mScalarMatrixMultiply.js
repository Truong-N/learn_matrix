const mSize = require('./mSize');

const mScalarMatrixMultiply = (n, m) => {
  const s1 = mSize(m);
  if (s1.row > 0 && s1.col > 0) {
    const nwArr = [];
    for (let r = 0; r < s1.row; r++) {
      const row = [];
      for (let c = 0; c < s1.col; c++) {
        row.push(n * m[r][c]);
      }
      nwArr.push(row);
    }
    return nwArr;
  }
};
module.exports = mScalarMatrixMultiply;
