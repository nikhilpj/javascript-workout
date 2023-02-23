class hashtable{
    constructor(size=7)
    {
        this.datamap= new Array(size)
    }
    _hash(key)
    {
        let hash=0
        for(let i=0;i<key.length;i++)
        {
            hash=(hash+ key.charCodeAt(i) * 23) % this.datamap.length
        }
        return hash
        
    }
    set(key,value)
    {
        let index = this._hash(key)
        if(!this.datamap[index])
        this.datamap[index]=[]
        this.datamap[index].push([key,value])
        return this
    }
    get(key)
    {
        let index = this._hash(key)
        if(this.datamap[index]){
            for(let i=0;i<this.datamap[index].length;i++)
            {
                if(this.datamap[index][i][0] ===key)
                {
                    console.log('haha');
                    return this.datamap[index][i][0]
                }
            }
        }
        return undefined
    }
    keys()
    {
        let allkeys=[]
        for(let i=0;i<this.datamap.length;i++)
        {
            if(this.datamap[i])
            {
                for(let j=0;j<this.datamap[i].length;j++)
                {
                    allkeys.push(this.datamap[i][j][0])
                }
            }
        }
        return allkeys
    }
}
let obj1= new hashtable(8)
console.log(obj1.set('nikhil',1));
obj1.set('Nikhil',1)
obj1.set('jky',2)
console.log(obj1.keys())
 console.log(obj1.get('nikhil'))
// console.log(obj1); 