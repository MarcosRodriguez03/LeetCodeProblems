var getDecimalValue = function (head) {
  total = 0;
  let current = head;
  if (head == null) {
    return 0;
  }
  while (current != null) {
    total = total * 2 + current.val;
    current = current.next;
  }
  return total;
};

// bad time complexity redo it 