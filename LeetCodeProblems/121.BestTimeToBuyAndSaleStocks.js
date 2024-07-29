var maxProfit = function (prices) {
  let leftPointer = 0;
  let rightPointer = 1;
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[leftPointer] < prices[rightPointer]) {
      let currentProfit = prices[rightPointer] - prices[leftPointer];
      max = Math.max(currentProfit, max);

    } else {
      leftPointer = rightPointer
    }
    rightPointer++
  }
  return max;
};