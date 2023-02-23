arr=[1,2,3,4]
class node{
    constructor(data)
    {
        this.data=data
        this.next = null
    }
}
class linkedlist{
    constructor(){
        this.head=null
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
            let node1= new node(data)
            let current=this.head
            while(current.next)
            {
                current=current.next
            }
            current.next=node1
            node1.next=null
            this.size++
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
    arrayToLs(brr)
    {
       
        for(let i=0;i<brr.length;i++)
        {
            this.push(brr[i])
        }


    }
}
let obj1 = new linkedlist
obj1.push(2)
obj1.push(3)
obj1.arrayToLs(arr)
obj1.print()