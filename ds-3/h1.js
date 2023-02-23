let heap=[null]
let insert=(num)=>{
    heap.push(num)
    if(heap.length>2)
    {
    let idx=heap.length-1
    while(heap[idx]<heap[Math.floor(heap[idx/2])] )
    {
        if(idx>=1)
        {
            [heap[idx], heap[Math.floor([idx/2])]] = [heap[Math.floor([idx/2]), heap[idx]]]
            if(Math.floor(idx/2)>1)
            {
                idx= Math.floor(idx/2)
            }
            else{
                break
            }
        }
    }
}
}

let remove=()=>
{
    let smallest= heap[1]
    if(heap.length>2)
    {
        heap[1] = heap[heap.length-1]
        heap.splice(heap.length-1)
        if(heap.length==3)
        {
            if(heap[1]>heap[2])
            {
                [heap[1],heap[2]]= [heap[2],heap[1]]
            }
            return smallest
        }
        let i=1
        let left = 2*i
        let right= 2*i+1
        while(heap[i]>heap[left] || heap[i]>heap[right])
        {
            if(heap[left]<heap[right])
            {
                [heap[left],heap[i]]= [heap[i],heap[left]]
                i=2*i
            }
            else{
                [heap[i],heap[right]] = [heap[right],heap[i]]
                i=2*i+1
            }
            left = 2*i
            right = 2*i+1
            if(heap[left]==undefined || heap[right]==undefined)
            {
                break
            }
        }
      
    }
    else if(heap.length==2)
    {
        heap.splice(1,1)
    }
    else{
        return null
    }
    return smallest
}
let sort = function(){
    let result=[]
    while(heap.length>1)
    {
        result.push(remove())
    }
    return result
}

insert(3)
insert(8)
insert(2)
insert(6)
remove(2)
console.log(sort());
