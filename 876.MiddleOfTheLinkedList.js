// first blind attempt 
var middleNode = function (head) {
  let arr = [];
  let current = head

  while (current != null) {
    arr.push(current)
    current = current.next
  }

  return arr[Math.floor(arr.length / 2)]
};

//help from hint 
var middleNode = function (head) {
  let current1 = head;
  let current2 = head;

  while (current2 != null && current2.next != null) {
    current1 = current1.next;
    current2 = current2.next.next;
  }

  return current1;
};