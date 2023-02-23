class node{
    constructor(value)
    {
        this.value = value
        this.edgeslist = []
    }
}
class graph{
    constructor(nodes)
    {
        this.nodes=[...nodes]
    }
    addtograph(node)
    {
        this.nodes.push(node)
        console.log(this.nodes.push(node));
    }
}
let obj1 = new node('a')
let obj2 = new node('b')
let obj3 = new node('c')
let obj4 = new node('d')
let obj5 = new node('e')

let graph1 = new graph([obj1,obj2,obj3,obj4,obj5])
console.log(obj1);
console.log(graph1);
// console.log(graph1.addtograph(8))