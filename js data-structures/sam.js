class node{
    constructor(data)
    {
        this.data=data
        this.next = null
        this.previous=null
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
                this.head=new node(data)
                this.size++
            }
            else{
                let node1 = new node(data)
                let current = this.head
                while(current.next)
                {
                    current=current.next
                }
                current.next=node1
                node1.next=null
                node1.previous=current
            }
        }
        print()
        {}

    }
