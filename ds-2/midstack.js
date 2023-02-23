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
        this.top= null
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
            let node1= new node(data)
            let temp = this.top
            this.top= node1
            node1.next= temp
            this.size++
        }
    }
    pop()
    {
        let temp = this.top.data
        this.top= this.top.next
        this.size--
        return temp
    }
    mid()
    {
        console.log("total no element ",this.size);
       let mid= Math.floor(this.size/2)
        console.log("middle position ",mid);
        let current=this.top
        let count =0
     let status=0
        while(current && current.next)
        {
            
            let temp2= this.pop()
            if(mid==count-1)
            {
            count++
            current=current.next.next
           status=1
            }
            if(status==1)
            {
                console.log(current.data);
            }
            else
            {
                console.log(current.data);
                current=current.next
            }
           

           
        }
      
    }
   
}
obj1=new stack()
obj1.push('s')
obj1.push('g')
obj1.push('h')
obj1.push('h')
obj1.push(6)
obj1.mid()

