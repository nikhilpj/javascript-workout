class node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}
class bt {
    constructor() {
        this.root = null
    }
   add(data)
   {
    let current = this.root
    if(!this.root)
    {
        this.root = new node(data)
    }
    else{
        function searchTree(current)
        {
            if(data<current.data)
            {
                if(current.left===null)
                {
                    current.left= new node(data)
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
                    return
                }
                else if(current.right!==null)
                {
                    return searchTree(current.right)
                }
            }
            
        }
        searchTree(current)
    }
   }
    findmin()
    {
        let current = this.root
        while(current.left)
        {
            current=current.left
        }
        console.log("this is min ",current.data);
    }
    findmax()
    {
        let current = this.root
        while(current.right)
        {
            current=current.right
        }
        console.log("max is ",current.data);
    }
    remove(data)
    {
        
        const removeNode = function(node,data)
        {
            if(node==null)
            {
                return null
            }
            if(data == node.data)
            {
                //node has no children
                if(node.left==null && node.right==null){
                    return null
                }
                 if(node.left == null)
                {
                    return node.right
                }
                if(node.right==null)
                {
                    return node.left
                }
                //node has two children
                var tempnode = node.right
                while(tempnode.left!==null)
                {
                    tempnode = tempnode.left
                }
               node.data= tempnode.data 
               node.right = removeNode(node.right,tempnode.data)
               return node
            }
            else if(data<node.data)
            {
              node.left=   removeNode(node.left,data)
                 return node
            }
            else{
               node.right=  removeNode(node.right,data)
                 return node
            }
        }
        let rt
     rt= removeNode(this.root,data)
    }
}
let obj1 = new bt()
obj1.add(3)
obj1.add(8)
obj1.add(17)
obj1.add(9)
obj1.remove(17)
obj1.remove(9)
obj1.findmin()
obj1.findmax()