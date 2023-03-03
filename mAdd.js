const mSize = require('./mSize');
const mAdd = (m1, m2) => {
  const s1 = mSize(m1);
  const s2 = mSize(m2);
  if (s1.row === s2.row && s1.col === s2.col) {
    const nwArr = [];
    for (let r = 0; r < s1.row; r++) {
      const row = [];
      for (let c = 0; c < s1.col; c++) {
        row.push(m1[r][c] + m2[r][c]);
      }
      nwArr.push(row);
    }
    return nwArr;
  }
};
module.exports = mAdd;
