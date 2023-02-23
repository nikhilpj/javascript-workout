class node{
    constructor(data)
    {
        this.data= data
        this.next =null
    }
}
class linkedList{
    constructor()
    {
        this.head = null
        this.size=0
    }
    push(data)
    {
        if(!this.head)
        {
            this.head= new node(data)
            this.size++
        }
        else{
            let current= this.head
            let node1 = new node(data)
           while(current.next)
           {
            current = current.next
           }
           current.next= node1
           node1.next=null
        }
    }
    deleteElement(data)
    {
        let current = this.head
        let previous
        
        while(current)
        {
           previous=current
           current=current.next
           if(current.data==data)
           {
            previous.next= current.next
            return
           } 
        }

    }
    print()
    {
        let current=this.head
        while(current)
        {
            console.log(current.data);
            current=current.next
        }
    }
}
obj1=new linkedList
obj1.push(4)
obj1.push(5)
obj1.push(6)
 obj1.deleteElement(6)
obj1.print()