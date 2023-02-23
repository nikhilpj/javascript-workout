const graph2= {
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
}

let dfs=(graph2,source)=>{
    let stack=[source]
    while(stack.length>0)
    {
        let current= stack.pop()
        console.log(current);
        for(let neighbour of graph2[current])
        {
            stack.push(neighbour)
        }
    }
}
dfs(graph2,'a')
