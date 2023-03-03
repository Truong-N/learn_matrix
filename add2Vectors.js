const add2Vectors = (v1, v2) => {
  if (v1.length === v2.length) {
    const v = [];
    for (let i = 0; i < v1.length; i++) {
      v.push(v1[i] + v2[i]);
    }
    return v;
  }
};
module.exports = add2Vectors;
