// first attempt 
var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false
  }
  let hash = {}
  let hash2 = {}
  for (let letter of s) {
    if (hash[letter]) {
      hash[letter]++
    } else {
      hash[letter] = 1;
    }
  }

  for (let letter of t) {
    if (hash2[letter]) {
      hash2[letter]++
    } else {
      hash2[letter] = 1;
    }
  }

  for (let key in hash) {
    if (hash[key] != hash2[key]) {
      return false
    }
  }
  return true
};

//second 

var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false
  }
  let hash = {}

  for (let letter of s) {
    if (hash[letter]) {
      hash[letter]++
    } else {
      hash[letter] = 1;
    }
  }

  for (let letter of t) {
    if (hash[letter]) {
      hash[letter]--
    } else {
      return false;
    }
  }
  return true
};