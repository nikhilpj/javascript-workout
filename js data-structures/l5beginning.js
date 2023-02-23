class node{
    constructor(value,next=null)
    {
        this.data = value
        this.next = next
    }
}
class linkedList{
    constructor()
    {
        this.head = null
        this.size = 0
    }
    printData(){
        let current = this.head
        while(current){
            console.log(current.data);
            current= current.next
        }
    }
    insertAtEnd(data){
        let nod = new node(data)
        let current
        
        if(!this.head)
        {
            this.head = nod
        }
        else{
            current=this.head
            while(current.next)
            {
                current=current.next
            }
            current.next = nod
            nod.next=null
        }
        this.size++
    }

    insertAtFirst(value){
        this.head = new node(value,this.head)
        this.size++
    }
    insertAtIndex(data,index)
    {
      let  nodes = new node(data,this.head)
        if(index > 0 && index > this.size)
        return

        if(index==0)
        {
            this.head = new node(data,this.head)
        }
        let current, previous
        let count =0
        current= this.head
        while(count < index)
        {
            previous=current
            count++
            current= current.next
        }
       
        previous.next = nodes
        nodes.next = current
        this.size++

    }
    getAtIndex(index)
    {
        let current = this.head
        let count=0
        while(count < index)
        {
            current=current.next
            count++
        }
        console.log("element at index ",index,current.data);
    }
}
const obj1 = new linkedList()
obj1.insertAtFirst(100)
obj1.insertAtFirst(50)
obj1.insertAtEnd(150)
obj1.insertAtIndex(112,1)
obj1.insertAtIndex(280,9)
obj1.insertAtFirst(70)
obj1.getAtIndex(2)
obj1.insertAtFirst(71)
console.log(obj1);
obj1.printData()