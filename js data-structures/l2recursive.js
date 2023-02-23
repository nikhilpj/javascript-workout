class Node{
    constructor(val){
        this.data = val
        this.Next = null
    }
}
obj1 = new Node(2)
obj2 = new Node(3)
obj3 = new Node(4)

obj1.Next = obj2
obj2.Next =obj3

// console.log(obj3);

const recursive = (head)=>{

if(head==null)
return
    console.log(head.data);
    
    recursive(head.Next)

}
recursive(obj1)