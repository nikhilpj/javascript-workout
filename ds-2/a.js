class  hashtable{
    constructor(size=6)
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
        let hash = 0
        for(let i=0;i<key.length;i++)
        {
            hash= (hash + key.charCodeAt(i) * 19) % this.array1.length
        }
        return hash
    }
    get(key)
    {
        let index = this._hash(key)
       if(this.array1[index])
       {
        for(let i=0;i<this.array1[index].length;i++){

            if(this.array1[index][i][0]===key)
            {
                console.log(this.array1[index][i][1]);
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
let obj1 = new hashtable(9)
console.log(obj1.set('kkk',7));
console.log(obj1.set('iiii',6));
obj1.get('kkk')
console.log(obj1.keys())