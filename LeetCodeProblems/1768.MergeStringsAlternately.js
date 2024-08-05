var mergeAlternately = function (word1, word2) {
  let maxLength = Math.max(word1.length, word2.length);
  let word = "";
  for (let i = 0; i < maxLength; i++) {
    if (word1[i]) {
      word += word1[i];
    }
    if (word2[i]) {
      word += word2[i];
    }
  }
  return word
};