const multiply2Vectors = require('./multiply2Vectors');

const dot2Vectors = (v1, v2) => {
  if (v1.length === v2.length) {
    const v = multiply2Vectors(v1, v2);
    return v.reduce((sum, n) => sum + n, 0);
  }
};
let a = [1, 2, 3, 4, 5];
let b = [0, -4, -3, 6, 5];
console.log(dot2Vectors(a, b));
