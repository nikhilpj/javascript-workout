arr=[1,2,3,4,5,6]
function reverse(brr)
{
    for(let i=0;i<brr.length/2;i++)
    {
        let temp = brr[i]
        brr[i]=brr[brr.length-1-i]
        brr[brr.length-1-i]=temp
    }
    console.log(brr);
}
reverse(arr)