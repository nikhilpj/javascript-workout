function merge(arr)
{
    if(arr.length<2)
    {
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return mergesort(merge(left),merge(right))
}
function mergesort(left,right)
{
    let sortedArr=[]
while(left.length && right.length)
{

    if(left[0]<right[0])
    {
        sortedArr.push(left.shift())
    }
    else
    {
        sortedArr.push(right.shift())
    }
}
return [...sortedArr,...left,...right]
}
let arr=[5,3,9,6,1,0,7]
console.log(merge(arr));
