class node{
    constructor(value)
    {
        this.data = value
        this.next = null
    }
}
class linkedList{
    constructor(){
       this.head = null
       this.size =  0

    }
    insertAtFront(data)
    {
        this.head = new node(data,this.head)
        this.size++
    }
    printlist(){
        let current= this.head
        while(current)
        {
            console.log(current.data)
            current=current.next
            
        }
    }
    insertAtEnd(val)
    {
        let nodes = new node(val)
        let current
        if(!this.head)
        {
            this.head = nodes
        }
        else
    {
         current= this.head
        while(current.next)
        {
            current = current.next
            console.log(current);
        }
        current.next = nodes
        nodes.next = null
        this.size++

    }
}
insertAtIndex(data,index)
{
    let prev,current
     current = this.head
     let count = 0
     while(count<index)
     {
        prev = current
        current=current.next
        count++
     }

}
}
let obj1 = new linkedList()
 obj1.insertAtFront(4)
// obj1.insertAtFront(5)

  
obj1.insertAtEnd(5)
obj1.insertAtEnd(6)
obj1.printlist()
