let graph1={
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:[]
}
function bfs(graph1,source)
{
    let stack=[source]
    while(stack.length>0)
    {
        let current = stack.pop()
        console.log(current);
        for(let neighbour of graph1[current])
        {
            stack.push(neighbour)
        }
    }
}
bfs(graph1,'a')