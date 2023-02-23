class node{
    constructor(){
        this.children = new Map()
        this.isend = false
    }
}
class trie{
    constructor(){
        this.root = new node()
    }
    insert(word)
    {
        //start with root node
        let current=this.root
        //take every character in the word
        for(let letter of word)
        {
            //check if it exists in children
            if(!current.children.has(letter)){
                //if not add it to children
                current.children.set(letter,new node())
            }
            //proceed to next depth of the trie
             current = current.children.get(letter)
        }
        current.isend = true
    }
    search(word)
    {
        if(!word.length)
        return false
        let current = this.root
        for(let letter of word)
        {
            if(!current.children.has(letter))
            return false
            current = current.children.get(letter)
        }
        return current.isend
    }

    startswith(prefix)
    {
        if(!prefix.length)
        return false
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
let obj1 = new trie()
console.log(obj1);
obj1.insert('nik')
console.log(obj1.insert('erttt'))
console.log(obj1.search('erttt'))
console.log(obj1.startswith('gh'));
console.log(obj1.search('nik'));