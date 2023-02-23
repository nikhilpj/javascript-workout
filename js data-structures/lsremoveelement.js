class node{
    constructor(data){
        this.data =data
        this.next = null
    }
}
class linkedList{
    constructor(){
        this.head = null
        this.size =0 
    }
    insertAtHead(data)
    {
        let node1 = new node(data)
        this.head= node1
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
        current.next=node1
        node1.next=null
        this.size++
    }
    print()
    {
        let current = this.head
        while(current)
        {
            console.log(current.data)
            current=current.next
        }
    }
    insertAtIndex(data,index){
        if(index==0)
        {
            let node1 = new node(data)
            this.head = node1
            this.size++
        }
        else if(index > this.size)
        return
        else{
            let nodes = new node(data)
            let prev,current
            let count =0
            current = this.head
            while(count<index)
            {
                prev = current
                current=current.next
                count++
            }
            prev.next = nodes
            nodes.next = current
            this.size++
        }
    }
    findMiddle()
    {
         let count =0 
         let current=this.head
         while(current)
         {
            count++
            current = current.next
         }
         console.log("no of elements ",count);
         console.log("middle element in position",(count-1)/2);
         let position = (count-1)/2 , num =0
         let samp = this.head
         while(samp)
         {
            if(num==position)
            {
                console.log(samp.val);
                samp=samp.next
            }
            num++
         }
    }

}
obj1=new linkedList()
obj1.insertAtHead(5)
obj1.insertAtEnd(6)
obj1.insertAtEnd(7)
obj1.insertAtIndex(3,1)
obj1.insertAtIndex(4,2)

obj1.print()
obj1.findMiddle()