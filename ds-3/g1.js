const graph1 = {
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    f:[]
}
let bfs= (graph1,source)=>{
    let queue=[source]
    while(queue.length>0)
    {
        let current= queue.shift()
        console.log(current);
        for(let nieghbour of graph1[current])
        {
            queue.push(nieghbour)
        }
    }
}
bfs(graph1,'a')