const tree={
    name:"jose",
    children:[{
        name:"nidhin",
        children: [{name:"naz",children:[]}]
    },
    {
        name:"nikhil",
        children: [{name:"nikhil jr1",children:[]},{
            name:"nikhil jr2",children:[]}
        ]
    }

    ]
    
}
function recursive(t){ 
    if(t.children.length==0)
    {
        return
    }
    t.children.forEach(child => {
        console.log(child.name);
        recursive(child)
        
    });
}
recursive(tree)