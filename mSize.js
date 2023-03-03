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
module.exports = mSize;
