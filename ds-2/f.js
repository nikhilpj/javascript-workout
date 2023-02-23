class stack{
    constructor()
    {
        this.item = []
        this.size=0
    }
    push(data)
    {
        this.item[this.size]=data
        this.size++
    }
    peek()
    {
        console.log(this.item[this.size-1]);
    }
    pop()
    {
        console.log('count is',this.size);
        this.size--
    }
}
let obj1 = new stack()
obj1.push(4)

obj1.push(6)
 obj1.pop()
obj1.peek()
