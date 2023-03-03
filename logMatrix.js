const logMatrix = (m) => {
  //   console.log('[');
  let str = '[';
  for (let r = 0; r < m.length; r++) {
    str += ['['];
    for (let c = 0; c < m[r].length - 1; c++) {
      str += m[r][c] + ', ';
    }
    str += m[r][m[r].length - 1] + ']';
    str += r === m.length - 1 ? ']\n' : ',\n';
  }
  console.log(str);
};
module.exports = logMatrix;
