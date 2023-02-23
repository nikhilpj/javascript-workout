class graph{
    constructor(noofvertices){
        this.noofvertices = noofvertices
        this.adjlist = new Map()

    }
    addvertex(v)
    {
        this.adjlist.set(v,[])
    }
    addedge(v,w)
    {
        this.adjlist.get(v).push(w)
        this.adjlist.get(w).push(v)
    }
    printgraph(){
        let keys = this.adjlist.keys()
        for(let v of keys)
        {
            let elist = this.adjlist.get(v)
            let data =''
            for(let e in elist){
                data = data + elist[e]+ ' '
            }
            console.log(v+'->'+data);
        }
    }
    bfs(v)
    {
        let q=[]
        q.push(v)
        let visited=[]
        let keys= this.adjlist.keys()
        for(let v of keys)
        {
            visited[v] =false
        }
        while(q.length>0)
        {
            let element = q.shift()
            visited[element]=true
            console.log(element);
            let elist= this.adjlist.get(element)
            for(let edata in elist)
            {
                let e = elist[edata]
                if(!visited[e])
                {
                    q.push(e)
                    visited[e]= true
                }
            }
        }
    }

    dfs(v)
    {
        let visited = []
        let keys = this.adjlist.keys()
        for(let v of keys)
        {
            visited[v]=false
        }
        this.dfsrecu(v,visited)
    }
    dfsrecu(v,visited)
    {
        let elist = this.adjlist.get(v)
        visited[v]=true
        console.log(v);
        for(let edata in elist)
        {
            let e=elist[edata]
            if(!visited[e])
            {
                visited[e]=true
                this.dfsrecu(e,visited)
            }
        }
    }
}
let g = new graph(4)
g.addvertex('a')
g.addvertex('b')
g.addvertex('c')
g.addvertex('d')

g.addedge('a','b')
g.addedge('b','c')
g.addedge('c','d')
g.addedge('d','a')

g.printgraph()

console.log("bfs");
g.bfs('a')

console.log("dfs");
g.dfs('a')