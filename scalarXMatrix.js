const scalarXMatrix = (s, M) => {
  const nwArr = [];
  for (let r = 0; r < M.length; r++) {
    const row = [];
    for (let c = 0; c < M[r].length; c++) {
      row.push(s * M[r][c]);
    }
    nwArr.push(row);
  }
  return nwArr;
};
module.exports = scalarXMatrix;
