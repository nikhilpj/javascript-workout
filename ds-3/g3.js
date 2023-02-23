class graph{
    constructor(noofvertices)
    {
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
    print()
    {
        var getkeys = this.adjlist.keys()
        for(var i of getkeys)
        {
            
        }
    }
}