class stack{
    constructor()
    {
        this.item=[]
        this.count=0
    }
    push(data)
    {
        this.item[this.count]=data
        console.log(`${data} added to ${this.count}`);
        this.count++
    }
    pop()
    {
        console.log(this.item[this.count-1]," is deleted");
        this.count--

    }
    peek()
    {
        console.log(`item at top is ${this.item[this.count-1]}`);
    }
}
let obj1=new stack()
obj1.push(1)
obj1.push(2)
obj1.push(3)
obj1.pop()
obj1.pop()
obj1.peek()