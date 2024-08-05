var longestCommonPrefix = function (strs) {
  let counter = 0;
  let baseWord = strs[0];
  for (let i = 0; i < baseWord.length; i++) {
    for (const word of strs) {
      if (word[i] != baseWord[i]) {
        return baseWord.slice(0, counter)
      }
    }
    counter += 1;
  }
  return baseWord.slice(0, counter)
}