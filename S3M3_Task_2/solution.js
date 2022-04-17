// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(head) {
    let count = 0;
    while (head){
        count++;
        head = head.next;
    }
    return count;
}
