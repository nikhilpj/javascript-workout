class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}
obj1 = new Node(2)
obj2 = new Node(5)
obj3 = new Node(7)
obj4 = new Node(10)

obj1.next = obj2
obj2.next = obj3
obj3.next = obj4

const sum = (head)=>{
    let temp =0
    let countr = head
    while(countr!=null)
    {   temp = temp + countr.val
        countr=countr.next
    }

return temp
}

let sample = sum(obj1)
console.log(sample);