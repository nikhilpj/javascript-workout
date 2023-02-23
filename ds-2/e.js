class node{
    constructor(data)
    {
        this.data = data
        this.next= null
    }
   
}
class queue{
    constructor()
    {
        this.front= null
        this.size=0
    }
    enqueue(data)
    {
        if(!this.front){
            this.front = new node(data)
            this.size++
        }
        else{
            let node1 = new node(data)
            let temp = this.front
            while(temp.next)
            {
                temp=temp.next
            }
            temp.next=node1
            node1.next = null
        }
    }
    print()
    {
        let temp = this.front
        while(temp)
        {
            console.log(temp.data);
            temp= temp.next
        }
    }
}
let obj1= new queue()
obj1.enqueue(5)
obj1.enqueue(6)
obj1.print()