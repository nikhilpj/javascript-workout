class Node{
    constructor(val)
    {
        this.val = val
        this.next = null
    }
}
obj1 = new Node(2)
obj2 = new Node(5)
obj3 = new Node(6)
obj4 = new Node(8)

obj1.next = obj2
obj2.next = obj3
obj3.next = obj4
console.log(obj3);
let temp=0
const sum = (head)=>{
    
    while(head!=null)
    {
        temp= temp + head.val
        console.log(head.val);
        sum(head.next)
        
    }
console.log(temp);

}
let sample=sum(obj1)
