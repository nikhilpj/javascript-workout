function quick(arr)
{
    if(arr.length<2)
    {
        return arr
    }
    let left=[]
    let right=[]
    let pivot = arr[arr.length-1]
    for(let i=0;i<arr.length-1;i++)
    {
        if(arr[i]<pivot)
        {
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return [...quick(left),pivot,...quick(right)]
}
let arr=[9,3,6,1,8,4]
console.log(quick(arr))