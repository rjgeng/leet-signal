// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(a, b, c) {
    const aNode = new ListNode(a);
    const bNode = new ListNode(b);
    const cNode = new ListNode(c);
    aNode.next = bNode;
    bNode.next = cNode;
    return aNode;
}
