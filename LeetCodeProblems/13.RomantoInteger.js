const romanVal = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}
var romanToInt = function (s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (romanVal[s[i]] < romanVal[s[i + 1]]) {
      total -= romanVal[s[i]];
    } else {
      total += romanVal[s[i]];
    }
  }
  return total;
};