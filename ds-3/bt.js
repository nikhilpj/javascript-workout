class Node{
    constructor(data,left = null,right=null)
    {
        this.data = data
        this.left=left
        this.right = right
    }
}
class bt{
    constructor()
    {
        this.root = null
    }
    add(data)
    {
        let current = this.root
        if(current===null)
        {
            this.root = new Node(data)
            return
        }
        else{
            const searchTree = function(current)
            {
                if(data<current.data)
                {
                    if(current.left===null)
                    {
                        current.left = new Node (data)
                        return
                    }
                    else if(current.left!==null)
                    {
                        return searchTree(current.left)
                    }
                }
                else if(data>current.data){
                    if(current.right===null)
                    {
                        current.right = new Node(data)
                        return
                    }
                    else if(current.right!==null)
                    {
                        return searchTree(current.right)
                    }

                }
                else{
                    return null
                }
            }
            return searchTree(current)
        }
    }
    findMin()
    {
        let current = this.root
        while(current.left!==null)
        {
            current=current.left
        }
        return current.data
    }
    findMax()
    {
        let current = this.root
        while(current.right!==null)
        {
            current=current.right
        }
        return current.data
    }
    isPresent(data)
    {
        let current = this.root
      
        while(current)
        {
           
            if(current.data===data)
            {
                console.log("data exists ",data);
                return true
            }
            else if(data<current.data)
            {
                current=current.left
            }
            else{
                current=current.right
            }
        }
        return false
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
                node.left = removeNode(node.left,data)
                return node
            }
            else{
                node.right = removeNode(node.right,data)
                return node
            }
        }
        this.root = removeNode(this.root,data)
    }
    inorder()
    {
        let current =this.root
        let solution =[]
        while(current!==null)
        {
            let guide =current.left
            if(current.left!==null)
           {
            while(guide.right!==null && guide.right!==current)
            {
                guide = guide.right
            }
            if(guide.right===null){
                guide.right=current
                current=current.left
            }
            else{
                guide.right=null
                solution.push(current.data)
                current= current.right
            }
            
        }else{
            solution.push(current.data)
            current=current.right
            }
        }
        return solution
    }
}
let obj1 = new bt()
obj1.add(4)
obj1.add(10)
obj1.add(2)
obj1.add(6)
console.log(obj1.findMax())
// obj1.remove(2)
console.log(obj1.findMin());

console.log(obj1.isPresent(2));
console.log(obj1.inorder())
