const randomArray = (n, d) => {
  const nwArr = [];
  for (let i = 0; i < n; i++) {
    nwArr.push(Math.random().toFixed(d));
  }
  return nwArr;
};
const a = randomArray(1000, 2);
const b = [...new Set(a)];

if (a.length > b.length) {
  const c = [];
  for (let h = 0; h < b.length; h++) {
    let bb = 0;
    for (let i = 0; i < a.length; i++) {
      if (b[h] === a[i]) {
        bb++;
      }
    }
    c.push(bb);
  }
  console.log(c);
}
console.log(b.length);
