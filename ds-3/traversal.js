class node{
    constructor(data)
    {
        this.data=data
        this.left= null
        this.right= null
    }
}
class bst{
    constructor()
    {
        this.root = null
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
            let searchtree=(current)=>{

                if(data<current.data)
                {
                    if(current.left==null)
                    {
                        current.left= new node(data)
                        return
                    }
                    else if(current.left!==null)
                    {
                        return searchtree(current.left)
                    }
                }
                else if(data>current.data)
                {
                    if(current.right==null)
                    {
                        current.right= new node(data)
                        return
                    }
                    else if(current.right!==null){
                        return searchtree(current.right)

                    }
                }
            }
            let rt
            rt= searchtree(this.root)

        }
    }
    inorder()
    {
        let current = this.root
        let result =[]
        function traverse(current)
        {
            if(current.left)
            {
                traverse(current.left)
            }
            result.push(current.data)
            if(current.right)
            {
                traverse(current.right)
            }
        }
        traverse(this.root)
        return result
    }
    postorder()
    {
        let result=[]
        function traversal(current)
        {
            if(current.left)
            {
                traversal(current.left)
            }
            if(current.right)
            {
                traversal(current.right)
            }
            result.push(current.data)
        }
        traversal(this.root)
        return result
    }
    preorder()
    {
        let result=[]
        function traversal(current)
        {
            result.push(current.data)
            if(current.left)
            traversal(current.left)
            if(current.right)
            traversal(current.right)
        }
        traversal(this.root)
        return result
    }
}


let obj1 = new bst()
obj1.add(7)
obj1.add(8)
obj1.add(4)
obj1.add(10)
console.log("inorder traversal ",obj1.inorder());
console.log("postorder",obj1.postorder());
console.log("preorder ",obj1.preorder());
console.log("this is tree traversal");
