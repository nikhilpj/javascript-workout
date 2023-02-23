class node{
    constructor(data)
    {
        this.data = data
        this.prev = null
        this.next = null
    }
}
class doublylist{
    constructor(){
        this.head =null
        this.size=0

    }
    pushAtHead(data){
        if(!this.head)
        {
            this.head = new node(data)
            this.size++
            console.log((this.head));
        }
       
    }
    pushAtEnd(data){
        let node1 = new node(data)
        let current=this.head
        while(current.next)
        {
            current=current.next
        }
        current.next= node1
        node1.next= null
        node1.prev=current
        
    }
    print(){
        let current = this.head
        while(current)
        {
            
            console.log(current);
            current = current.next
        }
    }
    insertAtIndex(data,index)
    {
        let node1= new node(data)
          let previous,current
          current=this.head
        let count = 0
        while(count<index)
        {
            previous=current
            current=current.next
            count++
        }
        previous.next=node1
        node1.prev=previous
        node1.next= current
        current.prev=node1
    }
}
obj1 = new doublylist
obj1.pushAtHead(4)
obj1.pushAtEnd(7)
obj1.pushAtEnd(8)
obj1.insertAtIndex(6,1)
obj1.print()