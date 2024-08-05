var containsDuplicate = function (nums) {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hashMap) {
      return true;
    } else {
      hashMap[nums[i]] = 1;
    }
  }
  return false

};