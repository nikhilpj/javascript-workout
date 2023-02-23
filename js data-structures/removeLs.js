class node{
    constructor(data)
    {
        this.data=data
        this.next = null
    }
}
class linkedList{
    constructor(){
        this.head=null
        this.size++
    }
    push(data)
    {
        if(!this.head)
        {
            this.head = new node(data)
            this.size++
        }
        else{
            
            let current = this.head
            while(current.next)
            {
                current=current.next
            }
            current.next= new node(data)
        }
    }
    print()
    {
       let current = this.head
       while(current)
       {
        console.log(current.data);
        current= current.next
       } 
    }
    remove(index)
    {
        let count=0
        let current = this.head
        let previous
        while(count<index)
        {
           previous=current
           current = current.next
           count++

        }
        previous.next = current.next
    }
}
obj1=new linkedList()
obj1.push(4)
obj1.push(7)
obj1.push(9)
obj1.remove(1)
obj1.print()


