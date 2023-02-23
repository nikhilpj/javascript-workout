class node{
    constructor(data)
    {
    this.data = data
    this.next = null
    }
}
class linkedList{
    constructor()
    {
        this.head=null
        this.size = 0
    }
    push(data)
    {
        if(!this.head)
        {
            this.head = new node(data)
            this.size++
        }
        else{
            let node1 = new node(data)
            let current= this.head
            while(current.next)
            {
                current=current.next
            }
            current.next= node1
            node1.next=null
        }
    }
    print()
    {
        let current=this.head
        while(current)
        {
            console.log(current);
            current=current.next
        }
    }
    arrayToLs(brr)
    {
        for(let i=0;i<brr.length;i++)
        {
            this.push(brr[i])
        }
    }
}
arr=[1,2,3,4]
obj1= new linkedList
obj1.push(8)
obj1.push(9)
obj1.push(5)

obj1.arrayToLs(arr)
obj1.print()