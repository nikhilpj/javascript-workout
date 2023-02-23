class node{
    constructor(data){
        this.data = data
        this.next = null
    }

}
class linkedList{
    constructor(){
        this.head = null
    }
    push(data)
    {
        if(!this.head)
        {
            this.head = new node(data)
        }
        else{
            let current = this.head
            while(current.next)
            {
                current=current.next
            }
            let node1 = new node(data)
            current.next=node1
            node1.next= null
            

        }
    }
    print(){
        let current = this.head
        while(current)
        {
            console.log(current);
            current = current.next
        }
    }
    reverse()
    {
        let previous=null,current=this.head
        let temp
        while(current)
        {
            temp = current.next
            current.next= previous
            previous=current
            current = temp
     
        }
        this.head = previous
    }
}
obj1= new linkedList
obj1.push(2)
obj1.push(3)
obj1.push(4)
// obj1.print()
obj1.reverse()
obj1.print()
