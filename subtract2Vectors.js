const add2Vectors = require('./add2Vectors');
const scalarXVector = require('./scalarXVector');

const subtract2Vectors = (v1, v2) => {
  if (v1.length === v2.length) {
    const v2a = scalarXVector(-1, v2);
    return add2Vectors(v1, v2a);
  }
};
module.exports = subtract2Vectors;
