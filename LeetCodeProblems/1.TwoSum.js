var twoSum = function (nums, target) {
  let hashMap = {}

  for (let i = 0; i < nums.length; i++) {
    let leftOver = target - nums[i]
    if (leftOver in hashMap) {
      return [i, hashMap[leftOver]]
    }
    hashMap[nums[i]] = i;
  }
};