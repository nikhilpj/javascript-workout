class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}
 obj1 = new Node('A')
 obj2 = new Node('B')
 obj3 = new Node('C')
 obj4= new Node('D')

 obj1.next = obj2
  obj2.next = obj3
 obj3.next = obj4
// console.log(obj4);

const traverseLinkedList = (head)=>
{
   let current = head
   while(current!=null)
   {
    console.log(current);
    current = current.next
   }
}
 traverseLinkedList(obj1)