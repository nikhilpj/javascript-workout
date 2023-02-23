class node{
    constructor(data)
    {
        this.data=data
        this.next=null
    }

}
class queue
{
    constructor()
    {
        this.top = null
        this.size++
    }
    push(data)
    {
        if(!this.top)
        {
            this.top=new node(data)
            this.size++
        }
        else
        {
        let current = this.top
        let node1=new node(data)
        while(current.next)
        {
            current=current.next
        }
        current.next=node1
    }
        
    }
    print()
    {
        let current = this.top
        while(current)
        {
            console.log(current.data);
            current=current.next
        }
    }
    dequeue()
    {
        let previous,current
         current= this.top
        while(current.next )
        {
            previous=current
            current=current.next
        }
        previous.next=null

    }
}
obj1=new queue()
obj1.push(2)
obj1.push(3)
obj1.push(4)
obj1.dequeue()
obj1.print()