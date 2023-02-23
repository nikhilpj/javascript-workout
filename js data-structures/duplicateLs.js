class node{
    constructor(data)
    {
        this.data=data
        this.next= null
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
        this.head=new node(data)
    }
    else{
        let current= this.head
        let node1=new node(data)
        while(current.next)
        {
            current=current.next
        }
        current.next=node1
        node1.next=null
    }
}
print()
{
    let current = this.head
    while(current)
    {
        console.log(current.data);
        current=current.next
    }
}
remove(index)
{
    let count=0,previous
    let current= this.head
    while(count<index)
    {
       previous=current
       current = current.next
       count++

    }
    previous.next = current.next
}
removeDuplicate()
{

  let current = this.head
  while(current && current.next)
  {
    if(current.data==current.next.data)
    {
        current.next=current.next.next
    }
    else{
        current=current.next
    }
  }
}
    
}
obj1=new linkedList()
obj1.push(4)
obj1.push(5)
obj1.push(5)
obj1.push(8)
obj1.push(8)
obj1.removeDuplicate()
 obj1.print()
