class node{
constructor(data)
{
    this.data=data
    this.next=null
}
}
class linkedlist{
    constructor()
    {
        this.head=null
        this.size=0
    }
    push(data)
    {
        if(!this.head)
        {
            this.head=new node(data)
        }
        else{
            let current = this.head
            let node1 = new node(data)
            while(current.next)
            {
                current=current.next
            }
            current.next = node1
            node1.next = null
        }
    }
    bubblesort()
    {
        let current = this.head
       
            while(current.next)
            {
                if(current.data > current.next.data )
                {
                    let temp= current.data
                    current.data = current.next.data
                    current.next.data=temp
                }
                current=current.next
            }
        
    }
    print()
    {
        let current = this.head
        while(current)
        {
            console.log(current.data);
            current = current.next
        }
    }
}
obj1=new linkedlist
obj1.push(4)
obj1.push(2)
obj1.push(8)
obj1.push(6)
obj1.bubblesort()
obj1.print()