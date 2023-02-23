class node{
    constructor(val,next=null)
    {
        this.val=val
        this.next=next
    }
}
class linkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    insertAtHead(data){
     let   node1 = new node(data)
        this.head= node1
        console.log(this.head)
        this.size++
    }
    insertAtEnd(data)
    {
        let node1 = new node(data)
        let current = this.head
        while(current.next)
        {
            current=current.next
        }
        current.next = node1
        node1.next=null
        console.log("at end",this.head);
        this.size++
    }
    insertAtIndex(data,index)
    {
        if(index==0)
        {
            let node1 = new node(data,this.head)
            this.head=node1
        }
        else {
            let nodes = new node(data,this.head)
            let count = 0
            let prev,current
            current = this.head
            while(count<index){
                prev = current
                current=current.next
                count++

            }
            prev.next = nodes
            nodes.next = current
            this.size++
            
        }
    }
    print(){
        let current = this.head
        while(current)
        {
            console.log(current.val);
            current=current.next
            
        }
    }
}
obj1 = new linkedList()
obj1.insertAtHead(2)
obj1.insertAtEnd(4)
obj1.insertAtIndex(7,1)
obj1.print()