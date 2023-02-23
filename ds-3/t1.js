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
    add(data) {
        let current = this.root
        if (!this.root) {
            this.root = new node(data)
            console.log(this.root.data);
        }
        else {
            let searchTree = (current) => {


                if (data < current.data) {
                    if (current.left == null) {
                        current.left = new node(data)
                        console.log(current.left.data);
                        return

                    }
                    else if (current.left !== null) {
                        return searchTree(current.left)
                    }
                }
                else if (data > current.data) {
                    if (current.right == null) {
                        current.right = new node(data)
                        console.log(current.right.data);
                        return
                    }
                    if (current.right !== null) {
                        return searchTree(current.right)
                    }
                }
            }
            let rt
            rt = searchTree(current)

        }
    }
    min() {
        let current = this.root
        while (current.left) {
            current = current.left
        }
        console.log("haahaha baka baaaaka ", current.data);
    }
    inorder()
    {
        let result=[]
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

    remove(data)
    {
        let removeNode = (current,data)=>{
            if(data==current.data)
            {
                if(current.left==null && current.right==null)
                {
                    return null
                }
               else if(current.left==null)
                {
                    return current.right
                }
                else if(current.right==null)
                {
                    return current.left
                }
                let temp = current.right
                while(temp.left)
                {
                    temp = temp.left
                }
                current.data= temp.data
                current.right = removeNode(current.right,temp.data)
                return current
            }
            else if(data<current.data)
            {
                current.left = removeNode(current.left,data)
                return current
            }
            else if(data>current.data)
            {
                current.right = removeNode(current.right,data)
                return current
            }
        }
        let rt
        rt = removeNode(this.root,data)
    }

    postorder()
    {
        
    }

}

let obj1 = new bt()
obj1.add(6)
obj1.add(8)
obj1.add(9)
obj1.add(2)
obj1.remove(2)
obj1.min()
console.log(obj1.inorder())
