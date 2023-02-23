class node{
    constructor(data)
    {
        this.data=data
        this.left = null
        this.right= null
    }
}
class bt{
    constructor()
    {
        this.root= null
    }
    add(data)
    {
        let current = this.root
        if(!this.root)
        {
            this.root= new node(data)
            return
        }
        else{
            let searchTree= (current)=>{

            if(data<current.data)
            {
                if(current.left==null)
                {
                    current.left = new node(data)
                    return
                }
                else if(current.left!==null)
                {
                   return searchTree(current.left)
                }
            }
            else if(data>current.data)
            {
                if(current.right==null)
                {
                    current.right=new node(data)
                    return
                }
                else if(current.right!==null)
                {
                  return  searchTree(current.right)
                }
            }
        }
        searchTree(this.root)
        }
    }

     remove(data)
     {
        let removeNode=(node,data)=>{
            if(data==node.data)
            {
                if(node.left==null && node.right==null)
                {
                    return null
                }
                 if(node.left==null)
                {
                    return node.right
                }
                 if(node.right==null)
                {
                    return node.left
                }
                let temp = node.right
                while(temp.left!==null)
                {
                    temp= temp.left
                }
                node.data = temp.data
                node.right = removeNode(node.right,temp.data)
                return node
            }
            else if(data<node.data)
            {
                node.left = removeNode(node.left,data)
                return node
            }
            else 
            {
                node.right = removeNode(node.right,data)
                return node
            }
        }
        let rt
       rt = removeNode(this.root,data)
     }

     min()
     {
        let current= this.root
        while(current.left)
        {
            current=current.left
        }
        console.log(current.data);
     }
}

let obj1= new bt()
obj1.add(4)
obj1.add(7)
obj1.add(9)
obj1.add(5)
obj1.remove(4)
obj1.min()