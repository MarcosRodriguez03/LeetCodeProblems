var isSubsequence = function (s, t) {
  let counter = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] == s[counter]) {
      counter++;
    }
  }
  if (counter == s.length) {
    return true;
  } else {
    return false;
  }
};