const graph1 = {
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
}


const bfs=(graph1,source)=>
{
const queue =[source]
while(queue.length>0)
{
    const current=queue.shift()
    console.log(current);
    for(let nieghbour of graph1[current])
    {
        queue.push(nieghbour)
    }
}
}

bfs(graph1,'a')