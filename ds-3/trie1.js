class node{
    constructor(){

    this.children = new Map()
    this.isend=false
    }
}
class tr{
    constructor()
    {
        this.root = new node()
    }
    insert(word)
    {
        let current = this.root
        for(let letter of word)
        {
            if(!current.children.has(letter))
            current.children.set(letter,new node())
            current=current.children.get(letter)
        }
        current.isend= true
    }
    search(word)
    {
        let current = this.root
        for(let letter of word)
        {
            if(!current.children.has(letter))
            return false
            current= current.children.get(letter)
        }
        return current.isend
    }
    startswith(prefix)
    {
        let current = this.root
        for(let letter of prefix)
        {
            if(!current.children.has(letter))
            return false
            current= current.children.get(letter)
        }
        return true
    }
}
let obj1 = new tr()
obj1.insert('nikhil')
console.log(obj1.search('nikhil'));
console.log(obj1.search('kkk'));
console.log(obj1.startswith('mm'));
console.log(obj1.startswith('nik'));