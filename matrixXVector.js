const matrixXVector = (M, v) => {
  for (let r = 0; r < M.length; r++) {
    if (v.length != M[r].length) {
      return;
    }
  }
  const nwArr = [];
  for (let r = 0; r < M.length; r++) {
    let sum = 0;
    for (let c = 0; c < v.length; c++) {
      sum += M[r][c] * v[c];
    }
    nwArr.push(sum);
  }
  return nwArr;
};
module.exports = matrixXVector;
