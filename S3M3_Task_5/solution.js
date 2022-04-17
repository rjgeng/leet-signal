// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(n, a) {
    const nNode = new ListNode(n);
    nNode.next = a;
    return nNode;
}
