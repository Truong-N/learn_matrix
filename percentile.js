// matrix
const mMultiply = (m1, m2) => {
  const s1 = mSize(m1);
  const s2 = mSize(m2);
  if (s1.col != s2.row) {
    console.log('can not multiply');
  }
  const row = s1.row;
  const col = s2.col;
  const nwArr = [];
  for (let r = 0; r < s1.row; r++) {
    for (let c = 0; c < s2.col; c++) {
      let sum = 0;
      for (let c2 = 0; c2 < s1.col; c2++) {
        sum += m1[r][c2] * m2[c2][c];
      }
      nwArr.push(sum);
    }
  }
  console.log(nwArr);
};
const mSize = (arr) => {
  const row = arr.length;

  try {
    const col = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length != col) {
        return { row: row, col: 0 };
      }
    }
    return { row: row, col: col };
  } catch (err) {
    return;
  }
};

const mTanpose = (arr) => {
  const { row, col } = mSize(arr);
  const nwArr = [];
  for (let r = 0; r < col; r++) {
    nwArr.push([]);
    for (let c = 0; c < row; c++) {
      nwArr[r].push(arr[c][r]);
    }
  }
  return nwArr;
};
// machine learning
const fpercentile = (percentile, arr) => {
  const percentileOfArray = Math.floor((percentile * ages.length) / 100);
  const newArr = [...arr]; // only 1 dimensional
  newArr.sort((a, b) => a - b);
  return newArr[percentileOfArray];
};
// msize
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
// 1*1 = 1 + 2*3 = 7 + 3*5 = 22 + 4*7 = 50
// 1*2 = 2 + 2*4 = 10 + 3*6 = 28 + 4*8 = 60
// 5*1 = 5 + 6*3 = 23 + 7*5 = 58 + 8*7 = 114
// 5*2 = 10 + 6*4 = 34 + 7*6 = 76 + 8*8 = 140
mMultiply(ma, ma1);
// const ma2 = [[1, 2, 3, 4]];
// const s1 = mSize(ma);
// const s2 = mSize(ma1);

// console.log(s1);
// console.log(s2);
// const ma3 = mTanpose(ma2);
// console.log('ma3: ', ma3);
// const ma4 = mTanpose(ma3);
// console.log(ma4);

// fpercentile
// let ages = [
//   5, 31, 43, 48, 50, 41, 7, 11, 15, 39, 80, 82, 32, 2, 8, 6, 25, 36, 27, 61, 31,
// ];
// console.log(fpercentile(90, ages));
