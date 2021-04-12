/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(list, k) {
  let curr = list;
  let parent;

  if (curr.value !== k) {
    parent = curr;
  } else {
    while (curr.next && curr.value === k) {
      curr = curr.next;
    }
    parent = curr;
  }

  while (curr.next) {
    const nextNode = curr.next;
    if (nextNode.value === k) {
      curr.next = nextNode.next;
    } else {
      curr = nextNode;
    }
  }
  return parent;
}

module.exports = removeKFromList;
