function mergesort(arr)
{
    if(arr.length<2)
    {
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let leftArr= arr.slice(0,mid)
    let rightArr = arr.slice(mid)
    return merge(mergesort(leftArr),mergesort(rightArr))
}
function merge(leftArr,rightArr)
{
    let sortedArr=[]
    while(leftArr.length && rightArr.length)
    {
        if(leftArr[0]<=rightArr[0])
        {
            sortedArr.push(leftArr.shift())
        }
        else
        {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr,...leftArr,...rightArr]

}
let arr=[1,4,2,9,6,8,3]
console.log(mergesort(arr));