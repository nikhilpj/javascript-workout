class node{
    constructor(data)
    {
        this.data=data
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
            this.top = new node (data)
        }
        else{
            let node1 = new node(data)
            let temp= this.top
            this.top= node1
            node1.next = temp
        }
    }
    print()
    {
        let temp = this.top
        while(temp)
        {
            console.log(temp.data);
            temp=temp.next
        }
    }
    pop()
    {
        this.top=this.top.next
        this.size--
    }
}
let obj1 = new stack()
obj1.push(4)
obj1.push(5)
obj1.push(3)
obj1.pop()
obj1.print()