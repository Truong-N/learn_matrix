const fpercentile = (percentile, arr) => {
  const percentileOfArray = Math.floor((percentile * ages.length) / 100);
  const newArr = [...arr]; // only 1 dimensional
  newArr.sort((a, b) => a - b);
  return newArr[percentileOfArray];
};
module.exports = fpercentile;
