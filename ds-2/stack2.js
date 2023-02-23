class node{
    constructor(data)
    {
        this.data = data
        this.next = null
    }

}
class stack{
    constructor()
    {
        this.top = null
        this.size=0
    }
    push(data)
    {
        if(!this.top)
        {
            this.top = new node(data)
            this.size++
        }
        else{

        
        let node1 = new node(data)
        let temp = this.top
        this.top=node1
        node1.next = temp
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
    remove()
    {
        this.top = this.top.next
        this.size--
    }
}
obj1= new stack()
obj1.push(2)
obj1.push(4)
obj1.remove()
obj1.push(0)
obj1.print()