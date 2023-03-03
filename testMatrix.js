// matrix
const mMultiply = require('./mMatrixMatrixMultiply');
const mAdd = require('./mAdd');
const mTranspose = require('./mTranspose');
const mScalarMatrixMultiply = require('./mScalarMatrixMultiply');
const mSubtract = require('./mSubtract');
const mDot = require('./mDot');
const logMatrix = require('./logMatrix');
const ma = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
const ma1 = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];
const v1 = [[1, 2, 3, 4, 5]];
const v2 = [[0, -4, -3, 6, 5]];
const dp1 = mDot(v1, v2);
const v1T = mTranspose(v1);
// logMatrix(v1T);
const dp3 = mMultiply(v1T, v2);
// console.log(dp1);
// console.log(dp3);
// logMatrix(dp3);
