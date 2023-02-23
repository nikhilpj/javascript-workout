class hashtable{
    constructor(size=7)
    {
        this.array1 = new Array(size)
    }
    _hash(key)
    {
        let hash=0
        for(let i=0;i<key.length;i++)
        {
            hash = (hash+ key.charCodeAt(i) * 19) % this.array1.length
        }
        return hash
    }
    set(key,value)
    {
        let index = this._hash(key)
        if(!this.array1[index])
        
            this.array1[index]=[]
            this.array1[index].push([key,value])
            return this
        
    }
    get(key)
    {
let index = this._hash(key)
if(this.array1[index])
{
    for(let i=0;i<this.array1[index].length;i++)
    {
        if(this.array1[index][i][0]===key)
        {
            
            return this.array1[index][i][1]
        }
    }
}

    }
    keys()
    {
        let all=[]
        for(let i=0;i<this.array1.length;i++)
        {
            if(this.array1[i])
            {
                for(let j=0;j<this.array1[i].length;j++)
                {
                    all.push(this.array1[i][j][0])
                }
                
            }
        }
        return all

    }
}
let obj1= new hashtable(9)
console.log(obj1.set('haha',8))
console.log(obj1.set('jjjk',3));
console.log(obj1.get('haha'));
console.log(obj1.keys());