const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  get size() {
    if (this.head) {
      return this.size;
    }
    return 0;
  }

  enqueue(value) {
    const newElemant = new ListNode(value);
    if (this.head) {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newElemant;
    } else {
      this.head = newElemant;
    }
  }

  dequeue() {
    if (this.head) {
      const last = this.head;
      this.head = last.next;
      return last.value;
    }
    return -1;
  }
}

module.exports = Queue;
