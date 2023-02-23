class node{
    constructor(data)
    {
        this.data=data
        this.left=null
        this.right=null
    }
}
class bst{
    constructor()
    {
        this.root=null
        this.size=0
    }
   insert(data)
   {
    let current = this.root
    if(!this.root)
    {
        this.root = new node(data)
        this.size++
    }
    else if(current!==null)
    {
       let searchTree = newnode=>{
        if(data<newnode.data)
        {
            if(newnode.left==null)
            {
                newnode.left = new node(data)
                this.size++
                return
            }
            else if(newnode.left)
            {
                searchTree(newnode.left)
            }
        }
        else if(data>newnode.data)
        {
            if(newnode.right==null)
            {
                newnode.right = new node(data)
                this.size++
                return
            }
            else if(newnode.right)
            {
                searchTree(newnode.right)
            }
        }
       }
       return searchTree(this.root)
    }
   }
   min()
   {
    let current=this.root
    while(current.left)
    {
        current=current.left
    }
    console.log(current.data);
   }  
   inorder()
   {
    let result =[]
    const current1 = this.root
    let traverse = current1 =>{
        if(current1.left)
        traverse(current1.left)
        result.push(current1.data)
        if(current1.right)
        {
            traverse(current1.right)
        }
    }
     traverse(current1)
    return result
   }
   preorder()
   {
let result=[]
let current=this.root
let traverse= node1=>{
    result.push(node1.data)
    if(node1.left)
    {
        traverse(node1.left)
    }
    if(node1.right)
    {
        traverse(node1.right)
    }
}
traverse(current)
return result
   }

   postorder()
   {
    let result=[]
    let current=this.root
    let traverse= node1=>{
        if(node1.left)
        {
            traverse(node1.left)
        }
        if(node1.right)
        {
            traverse(node1.right)
        }
        result.push(node1.data)
    }
    traverse(current)
    return result
   }
}
let obj1 = new bst()
obj1.insert(2)
obj1.insert(4)
obj1.insert(1)
obj1.min()
console.log(obj1.size);
console.log(obj1.inorder())
console.log(obj1.preorder());
console.log(obj1.postorder());