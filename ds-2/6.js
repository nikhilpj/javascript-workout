class hashtable{
    constructor(size=8)
    {
        this.array1 = new Array(size)
    }
    set(key,value)
    {
        let index = this._hash(key)
        if(!this.array1[index])
        this.array1[index]=[]
        this.array1[index].push([key,value])
        return this
    }
    _hash(key)
    {
        let hash =0
        for(let i=0;i<key.length;i++)
        {
            hash = (hash+ key.charCodeAt(i) * 19) % this.array1.length
        }
        return hash

    }
    get(key)
    {
        let index=this._hash(key)
       if(this.array1[index])
       {
        for(let i=0;i<this.array1[index].length;i++)
        {
            if(this.array1[index][i][0]===key)
            {
                console.log(this.array1[index][i][1]);
            }
        }
       }
    }
    
}
let obj1= new hashtable(9)
 console.log(obj1.set('kkk',7))
obj1.get('kkk')