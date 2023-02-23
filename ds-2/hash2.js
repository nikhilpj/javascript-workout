class hashtable{
    constructor(size=7)
    {
        this.datamap = new Array(size)
        this.size=size
    }
    _hash(key)
    {
        let hash=0
        for(let i=0;i<key.length;i++)
        {
            hash=(hash + key.charCodeAt(i) * 23) % this.datamap.length
        }
        return hash
    }
    set(key,value)
    {
        let index= this._hash(key)
        if(!this.datamap[index])
        
            this.datamap[index]=[]
            this.datamap[index].push([key,value])
            return this
        
    }
    get(key)
    {
        let index= this._hash(key)
        if(this.datamap[index])
        {
            for(let i=0;i<this.datamap[index].length;i++)
            {
                if(this.datamap[index][i][0]===key)
                {
                    return this.datamap[index][i][1]
                }
            }
        }
    }
}
let obj1= new hashtable(6)
console.log(obj1.set('lll',3))
console.log(obj1.set('hjk',4));
console.log(obj1.get('hjk'));