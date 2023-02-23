class node{
    constructor(data)
    {
        this.data=data
        this.left = null
        this.right = null
    }
}
class bst{
    constructor()
    {
        this.root = null
    }
    add(data)
    {
        let current=this.root
        if(!this.root)
        {
            this.root = new node(data)
            console.log(this.root);
            return
        }
        else
        {
            let searchTree = current =>{

                if(data<current.data)
                {
                    if(current.left ===null)
                    {
                        current.left = new node(data)
                        console.log(current.left);
                        return
                    }
                    else if(current.left!==null)
                    {
                        return searchTree(current.left)
                    }
                }
                else if(data>current.data)
                {
                    if(current.right===null)
                    {
                        current.right = new node(data)
                        console.log(current.right);
                        return
                    }
                    else if(current.right!==null)
                    {
                        return searchTree(current.right)
                    }
                }
            }
            searchTree(this.root) 
       
        }
    }
    min()
    {
        let current=this.root
        while (current.left) {
            current=current.left
        }
        console.log(current.data+" is the min");
    }
   remove(data)
   {
    let removeNode = (node,data)=>{
        if(node==null)
        {
            return null
        }
        else if(data===node.data)
        {
            if(node.left===null && node.right===null)
            {
                return null
            }
            else if(node.left==null)
            {
                return node.right
            }
            else if(node.right==null)
            {
                return node.left
            }
            let temp = node.right
            while(temp.left)
            {
                temp=temp.left
            }
            node.data=temp.data
            node.right = removeNode(node.right,data)
            return node
        }
        else if(data<node.data)
        {
            node.left= removeNode(node.left,data)
            return node
        }
        else if(data>node.data)
        {
            node.right=removeNode(node.right,data)
            return node
        }
    }
    let rt
    rt = removeNode(this.root,data)
   }

   inorder()
   {
    let current=this.root
    let result=[]
    let traverse=(current)=>{
        if(current.left)
        traverse(current.left)
        result.push(current.data)
        if(current.right)
        traverse(current.right)

    }
    traverse(current)
    return result
   }
postorder()
{
    let current=this.root
    let result=[]
    let traverse = (current)=>{
        if(current.left)
        {
            traverse(current.left)
        }
        if(current.right)
        {
            traverse(current.right)
        }
        result.push(current.data)
    }
    traverse(current)
    return result
}
preorder()
{
    let current =this.root
    let result=[]
  let traverse =(current)=>{
    result.push(current.data)
    if(current.left)
    traverse(current.left)
    if(current.right)
    traverse(current.right)
  }
  traverse(current)
  return result
}
}
let obj1 = new bst()
obj1.add(3)
obj1.add(7)
obj1.add(2)
// obj1.remove(2)

obj1.min()
console.log(obj1.inorder())
console.log(obj1.postorder());
console.log(obj1.preorder());