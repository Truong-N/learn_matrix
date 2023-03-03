const mScalarMatrixMultiply = require('./mScalarMatrixMultiply');
const mAdd = require('./mAdd');

const mSubtract = (m1, m2) => {
  const m2a = mScalarMatrixMultiply(-1, m2);
  return mAdd(m1, m2a);
};
module.exports = mSubtract;
