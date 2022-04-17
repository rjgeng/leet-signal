// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(head) {
  let sum = 0;
  while ( head ){
      sum += head.value;
      head = head.next;
  }
  return sum;
}
