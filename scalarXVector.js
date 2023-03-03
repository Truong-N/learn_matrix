const scalarXVector = (n, v1) => {
  const v = [];
  for (let i = 0; i < v1.length; i++) {
    v.push(n * v1[i]);
  }
  return v;
};
module.exports = scalarXVector;
