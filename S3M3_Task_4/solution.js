// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(a) {
    let result = -9999;
    while ( a ){
        result = a.value;
        a = a.next;        
    }
    return result;
}
