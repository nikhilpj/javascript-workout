const graph1 = {
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
}

const dfs=(source,graph)=>{
    const stack = [source]
    while(stack.length>0)
    {
        const current = stack.pop()
        console.log(current);
        for(let neighbour of graph[current])
        {
            stack.push(neighbour)
        }
    }
}

dfs('a',graph1)