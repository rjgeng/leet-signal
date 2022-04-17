// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(a, n) {
  const nNode = new ListNode(n);
 
  if (!a) return nNode;
  let head = a; 
  while (a.next){
      a = a.next;   
  }
    a.next = nNode;
        
    return head;
}
