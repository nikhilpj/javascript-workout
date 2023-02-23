function quicksort(brr)
{
    if(brr.length<2)
    {
        return brr
    }
    let pivot = brr[brr.length-1]
    let left = []
    let right =[]
    for(let i=0;i<brr.length-1;i++)
    {
        if(brr[i]<pivot)
        {
            left.push(brr[i])
        }
        else
        {
            right.push(brr[i])
        }
    }
    return [...quicksort(left),pivot,...quicksort(right)];
}
arr=[4,6,2,3,9,5]
console.log(quicksort(arr)); 